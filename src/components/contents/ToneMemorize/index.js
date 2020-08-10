import React from "react";
import { useStyles } from "../../Styles";
import DimensionsProvider from "../VirtualPiano/DimensionsProvider";
import SoundfontProvider from "../VirtualPiano/SoundfontProvider";
import Soundfont from "soundfont-player";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import { Slide } from "@material-ui/core";

import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";
const formStyle = {
  width: "auto",
  display: "inline-block",
  margin: "5px",
};
const NATURAL_NOTES = ["C", "D", "E", "F", "G", "A", "B"];
const FLAT_NOTES = ["Db", "Eb", "Gb", "Ab", "Bb"];
const ALL_NOTES = [
  "C",
  "D",
  "Db",
  "E",
  "Eb",
  "F",
  "G",
  "Gb",
  "A",
  "Ab",
  "B",
  "Bb",
];
const OCTAVES = ["0", "1", "2", "3", "4", "5", "6", "7"];
const musyngNames = require("soundfont-player/names/musyngkite.json");

export default function ToneMemorize() {
  const classes = useStyles();

  // const [firstNote, setFirstNote] = React.useState("C5");
  // const [lastNote, setLastNote] = React.useState("E6");
  // const [noteList, setNoteList] = React.useState(getNoteList("C5", "E6"));
  const [quizNote, setQuizNote] = React.useState("F5");
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

  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const [answerList, setAnswerList] = React.useState(["A6", "B4", "C5", "F5", "Bb5"]);

  // Set instrument
  const handleChangeInstrument = (event) => {
    setInstrument(event.target.value);
  };
  const handleNewGame = (event) => {
    let [first, last] = randomRange();
    let nList = getNoteList(first, last);
    let qNote = nList[randomIntFromInterval(0, nList.length - 1)];
    let ansList = RandomAnswerArray(nList, qNote);
    ansList = shuffle(ansList);
    // setFirstNote(first);
    // setLastNote(last);
    // setNoteList(nList);
    setAnswerList(JSON.parse(JSON.stringify(ansList)))
    setQuizNote(JSON.parse(JSON.stringify(qNote)));
    //Reset
    setValue("");
    setHelperText("Choose wisely");
    setError(false);

    first = MidiNumbers.fromNote(first);
    last = MidiNumbers.fromNote(last);
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

  const handlePlayNote = (event) => {
    Soundfont.instrument(audioContext, instrument, { gain: 3 }).then(function (
      inst
    ) {
      inst.play(quizNote);
    });
  };

  const handleSubmitQuiz = (event) => {
    event.preventDefault();

    if (value === quizNote) {
      setHelperText("You got it! Now can you locate it on the piano by pressing corresponding button?");
      setError(false);
    } else if (value !== "" && value !== quizNote) {
      setHelperText("Sorry, please listen again!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText("Are you sure?");
    setError(false);
  };

  const getNatureKeyCount = (first, last) => {
    let count = 0;
    for (let i = first; i <= last; i++) {
      const { isAccidental } = MidiNumbers.getAttributes(i);
      count = count + !isAccidental;
    }
    return count;
  };

  console.log(value, quizNote);
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
                      <MenuItem value={inst}>{capital_letter(inst)}</MenuItem>
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
              variant="outlined"
              onClick={handleNewGame}
              className={classes.button}
              style={{ margin: "5px" }}
            >
              New game
            </Button>
          </Slide>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={2000}
          >
            <Button
              id="play-note"
              variant="outlined"
              onClick={handlePlayNote}
              className={classes.buttonStart}
              style={{
                margin: "5px",
              }}
            >
              Play quiz note
            </Button>
          </Slide>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={2000}
          >
            <form onSubmit={handleSubmitQuiz} style={{margin: "10px 0 0 0 "}}>
              <FormControl
                component="fieldset"
                error={error}
                className={classes.formQuiz}
              >
                <FormLabel component="legend">
                  Which note was played? Select your answer!
                </FormLabel>
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                  row
                >
                {answerList.map((ans) => <FormControlLabel
                    value={ans}
                    control={<Radio />}
                    label={ans}
                  />)}

                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button
                  type="submit"
                  variant="outlined"
                  className={classes.button}
                  style={{ color: "#388e3c" }}
                >
                  Check Answer
                </Button>
              </FormControl>
            </form>
          </Slide>
          <div className={classes.pianoContainer} style={{ top: "30%" }}>
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
  // return (
  //   <div className={classes.container}>
  //     <Paper className={classes.paper} style={{textAlign:"center", display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",}}>
  //       <span style={{color:"#c2185b", fontSize:"2rem"}}>STILL IN DEVELOPMENT</span>
  //     </Paper>
  //   </div>

  // );
}

function capital_letter(str) {
  str = str.split("_");

  for (var i = 0, x = str.length; i < x; i++) {
    if (str[i].length >= 1) str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNoteList(first, last) {
  let noteList = [];
  let noteBegin = ALL_NOTES.indexOf(first[0]);
  let octBegin = OCTAVES.indexOf(first[1]);
  let noteEnd = ALL_NOTES.indexOf(last[0]);
  let octEnd = OCTAVES.indexOf(last[1]);

  if (octEnd === octBegin) {
    for (let j = noteBegin; j <= noteEnd; j++)
      noteList.push(ALL_NOTES[j] + OCTAVES[octEnd]);
  } else {
    for (let i = octBegin; i <= octEnd; i++) {
      if (i === octBegin) {
        for (let j = noteBegin; j <= 6; j++)
          noteList.push(ALL_NOTES[j] + OCTAVES[i]);
      } else if (i === octEnd) {
        for (let j = 0; j <= noteEnd; j++)
          noteList.push(ALL_NOTES[j] + OCTAVES[i]);
      } else {
        for (let j = 0; j <= 6; j++) noteList.push(ALL_NOTES[j] + OCTAVES[i]);
      }
    }
  }
  return noteList;
}

function randomRange() {
  let noteBegin = randomIntFromInterval(0, 6);
  let octBegin = randomIntFromInterval(2, 5);

  let noteEnd = randomIntFromInterval(0, 6);
  let octEnd = randomIntFromInterval(
    octBegin+1,
    octBegin + 3 > 7 ? 7 : octBegin + 3
  );
  if(noteBegin === 6 && octEnd === octBegin + 1){
    noteBegin = 0;
  }

  let firstNote = NATURAL_NOTES[noteBegin] + OCTAVES[octBegin];
  let lastNote = NATURAL_NOTES[noteEnd] + OCTAVES[octEnd];
  console.log(firstNote, lastNote);
  return [firstNote, lastNote];
}

function RandomAnswerArray(noteList, quizNote) {
  var arr = [];
  while (arr.length < 5) {
    var r = Math.floor(Math.random() * (noteList.length-1));
    if (arr.indexOf(noteList[r]) === -1) arr.push(noteList[r]);
  }
  if (arr.indexOf(quizNote) === -1) {
    arr.pop();
    arr.push(quizNote);
  }
  return arr;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}