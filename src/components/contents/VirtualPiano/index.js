import React from "react";
import { useStyles } from "../../Styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import { Slide } from "@material-ui/core";

import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import "./styles.css";

import DimensionsProvider from "./DimensionsProvider";
import SoundfontProvider from "./SoundfontProvider";

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

// const noteRange = {
//   first: MidiNumbers.fromNote("c5"),
//   last: MidiNumbers.fromNote("e5"),
// };
// const keyboardShortcuts = KeyboardShortcuts.create({
//   firstNote: noteRange.first,
//   lastNote: noteRange.last,
//   keyboardConfig: KeyboardShortcuts.QWERTY_ROW,
// });
const formStyle = {
  width: "auto",
  display: "inline-block",
  margin: "5px",
};
export default function VirtualPiano() {
  const classes = useStyles();

  const NATURAL_NOTES = ["C", "D", "E", "F", "G", "A", "B"];
  const OCTAVES = ["0", "1", "2", "3", "4", "5", "6", "7"];
  const musyngNames = require("soundfont-player/names/musyngkite.json");
  const [firstNote, setFirstNote] = React.useState({ note: "C", octave: "5" });
  const [lastNote, setLastNote] = React.useState({ note: "E", octave: "6" });
  const [noteRange, setNoteRange] = React.useState({
    first: MidiNumbers.fromNote("C5"),
    last: MidiNumbers.fromNote("E6"),
  });
  const [keyboardShortcuts, setKeyboardShortcuts] = React.useState(
    KeyboardShortcuts.create({
      firstNote: noteRange.first,
      lastNote: noteRange.last,
      keyboardConfig: KeyboardShortcuts.BOTTOM_ROW.concat(
        KeyboardShortcuts.QWERTY_ROW
      ),
    })
  );
  const [realWidth, setRealWidth] = React.useState(10);
  const [instrument, setInstrument] = React.useState("acoustic_grand_piano");

  // Handle change first note and last note
  const handleChangeFirstNoteNote = (event) => {
    setFirstNote({ ...firstNote, note: event.target.value });
  };
  const handleChangeFirstNoteOctave = (event) => {
    setFirstNote({ ...firstNote, octave: event.target.value });
  };
  const handleChangeLastNoteNote = (event) => {
    setLastNote({ ...lastNote, note: event.target.value });
  };
  const handleChangeLastNoteOctave = (event) => {
    setLastNote({ ...lastNote, octave: event.target.value });
  };
  // Set instrument
  const handleChangeInstrument = (event) => {
    setInstrument(event.target.value);
  };
  const handleGeneratePiano = (event) => {
    let first = MidiNumbers.fromNote(firstNote.note + firstNote.octave);
    let last = MidiNumbers.fromNote(lastNote.note + lastNote.octave);
    let tmp = KeyboardShortcuts.create({
      firstNote: first,
      lastNote: last,
      keyboardConfig: KeyboardShortcuts.BOTTOM_ROW.concat(
        KeyboardShortcuts.QWERTY_ROW
      ),
    });

    setNoteRange({ first, last });
    setKeyboardShortcuts(tmp);

    let width = getNatureKeyCount(first, last);
    setRealWidth(JSON.parse(JSON.stringify(width)));
  };
  const getNatureKeyCount = (first, last) => {
    let count = 0;
    for (let i = first; i <= last; i++) {
      const { isAccidental } = MidiNumbers.getAttributes(i);
      count = count + !isAccidental;
    }
    return count;
  };
  return (
    <div className={classes.container}>
      <Slide in={true} mountOnEnter unmountOnExit timeout={1000}>
        <Paper className={classes.paper}>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={2000}
          >
            <FormControl>
              <FormLabel> First Note</FormLabel>
              <FormGroup row>
                <FormControl className={classes.formControl} style={formStyle}>
                  <Select
                    labelId="set-first-note-label"
                    id="set-first-note"
                    value={firstNote.note}
                    onChange={handleChangeFirstNoteNote}
                  >
                    {NATURAL_NOTES.map((note) => (
                      <MenuItem value={note}>{note}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} style={formStyle}>
                  <Select
                    labelId="set-first-octave-label"
                    id="set-first-octave"
                    value={firstNote.octave}
                    onChange={handleChangeFirstNoteOctave}
                  >
                    {OCTAVES.map((octave) => (
                      <MenuItem value={octave}>{octave}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </FormGroup>
            </FormControl>
          </Slide>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={2000}
          >
            <FormControl>
              <FormLabel>Last Note</FormLabel>
              <FormGroup row>
                <FormControl className={classes.formControl} style={formStyle}>
                  <Select
                    labelId="set-last-note-label"
                    id="set-last-note"
                    value={lastNote.note}
                    onChange={handleChangeLastNoteNote}
                  >
                    {NATURAL_NOTES.map((note) => (
                      <MenuItem value={note}>{note}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} style={formStyle}>
                  <Select
                    labelId="set-last-octave-label"
                    id="set-last-octave"
                    value={lastNote.octave}
                    onChange={handleChangeLastNoteOctave}
                  >
                    {OCTAVES.map((octave) => (
                      <MenuItem value={octave}>{octave}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </FormGroup>
            </FormControl>
          </Slide>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={2000}
          >
            <FormControl>
              <FormLabel>Instrument</FormLabel>
              <FormGroup row>
                <FormControl className={classes.formControl} style={formStyle}>
                  <Select
                    labelId="set-instrument-label"
                    id="set-instrument"
                    value={instrument}
                    onChange={handleChangeInstrument}
                  >
                    {musyngNames.map((inst) => (
                      <MenuItem value={inst}>
                        {capital_letter(inst)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </FormGroup>
            </FormControl>
          </Slide>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={2000}
          >
            <Button
              id="generate-piano"
              onClick={handleGeneratePiano}
              className={classes.button}
              style={{ margin: "5px" }}
            >
              Generate
            </Button>
          </Slide>
          <div className={classes.pianoContainer}>
            <DimensionsProvider>
              {({ containerWidth, containerHeight }) => (
                <SoundfontProvider
                  instrumentName={instrument}
                  audioContext={audioContext}
                  hostname={soundfontHostname}
                  render={({ isLoading, playNote, stopNote }) => (
                    <Piano
                      noteRange={noteRange}
                      width={containerWidth}
                      keyWidthToHeight={
                        containerWidth / (containerHeight * realWidth)
                      }
                      playNote={playNote}
                      stopNote={stopNote}
                      disabled={isLoading}
                      keyboardShortcuts={keyboardShortcuts}
                      className="PianoQuangStyle"
                    />
                  )}
                />
              )}
            </DimensionsProvider>
          </div>
        </Paper>
      </Slide>
    </div>
  );
}

function capital_letter(str) {
  
  str = str.split("_");

  for (var i = 0, x = str.length; i < x; i++) {
    if(str[i].length >= 1)
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
}
