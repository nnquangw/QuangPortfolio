import React from "react";
import { useStyles } from "../../Styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";
import { Slide } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CasinoIcon from "@material-ui/icons/Casino";

import Legends from "./Legends";
import Information from "./Information";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    maxWidth: 500,
    opacity: 0.9,
  },
}))(Tooltip);

const REST = "#eeeeee";
const IDX = "#5d4037";
const CHECKING = "#039be5";
const WRONG = "#212121";
const FOUND = "#1de9b6";
const BOUNDARY = "#c2185b";
var delayTime = 1;

export default function Searching() {
  const classes = useStyles();

  const [data, setData] = React.useState(generateData([0, 1, 2, 3, 4]));
  const [oriData, setOriData] = React.useState(generateData([0, 1, 2, 3, 4]));
  const [target, setTarget] = React.useState(2);
  const [alg, setAlgorithm] = React.useState("linear");
  const [mode, setMode] = React.useState("all");
  const [state, setState] = React.useState(0);
  const [indexes, setIndexes] = React.useState([]);

  const handleGenerateArray = () => {
    document.getElementById("input-text").value = RandomArray();
    let input = document.getElementById("input-text").value.split(",");
    let tmp = getRndInteger(0, input.length - 1);
    document.getElementById("input-target").value = input[tmp];
  };

  const handleSubmitArray = () => {
    let tmpData = generateData(
      Clone(document.getElementById("input-text").value).split(",")
    );
    setData(Clone(tmpData));
    setOriData(Clone(tmpData));
    let tmpTarget = Clone(document.getElementById("input-target").value).split(
      ","
    );
    setTarget(Clone(tmpTarget[0]));
    setState(0);
    setIndexes([]);
  };

  const handleChangeAlgorithm = (event) => {
    setAlgorithm(event.target.value);
  };

  const handleChangeMode = (event) => {
    setMode(event.target.value);
  };

  const handleSearchingState = () => {
    switch (state) {
      case 0:
        delayTime = 1;
        switch (alg) {
          case "linear":
            linearSearch(data, setData, target, setIndexes, setState, mode);
            break;
          case "binary":
            binarySearch(data, setData, target, setIndexes, setState, mode);
            break;
          case "jump":
            jumpSearch(data, setData, target, setIndexes, setState, mode);
            break;
          default:
            break;
        }
        setState(1);
        break;
      case 1:
        delayTime = 0;
        setState(2);
        break;
      case 2:
        setData(Clone(oriData));
        setState(0);
        setIndexes([]);
        break;
      default:
        break;
    }
  };

  const stateText = {
    0: "START",
    1: "SKIP",
    2: "RESET",
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2500}
        >
          <FormControl className={classes.formControl}>
            <InputLabel id="set-algorithm">Algorithm</InputLabel>
            <Select
              labelId="set-algorithm-label"
              id="set-algorithm"
              value={alg}
              onChange={handleChangeAlgorithm}
            >
              <MenuItem value={"linear"}>Linear Search</MenuItem>
              <MenuItem value={"binary"}>Binary Search</MenuItem>
              <MenuItem value={"jump"}>Jump Search</MenuItem>
            </Select>
          </FormControl>
        </Slide>
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2500}
        >
          <FormControl className={classes.formControl}>
            <InputLabel id="mode">Mode</InputLabel>
            <Select
              labelId="set-mode-label"
              id="set-mode"
              value={mode}
              onChange={handleChangeMode}
            >
              <MenuItem value={"all"}>All found</MenuItem>
              <MenuItem value={"first"}>First found</MenuItem>
            </Select>
          </FormControl>
        </Slide>

        <Information alg={alg} />
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2500}
        >
          <FormControl
            className={classes.formControl}
            style={{ margin: "0px 5px" }}
          >
            <TextField
              id="input-text"
              label="Input Text"
              variant="outlined"
              margin="dense"
              InputLabelProps={{ shrink: true }}
              defaultValue={[0, 1, 2, 3, 4]}
            />
          </FormControl>
        </Slide>
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2500}
        >
          <FormControl
            className={classes.formControl}
            style={{ margin: "0px 5px" }}
          >
            <TextField
              id="input-target"
              label="Input Target"
              variant="outlined"
              margin="dense"
              InputLabelProps={{ shrink: true }}
              defaultValue={2}
            />
          </FormControl>
        </Slide>
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2500}
        >
          <LightTooltip title="Generate Random Array" arrow>
            <IconButton
              id="generate-array"
              onClick={handleGenerateArray}
              className={classes.button}
            >
              <CasinoIcon style={{ color: "#0097a7" }} />
            </IconButton>
          </LightTooltip>
        </Slide>
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2500}
        >
          <LightTooltip title="Submit Array" arrow>
            <Button
              id="submit-array"
              onClick={handleSubmitArray}
              className={classes.buttonStart}
            >
              Submit
            </Button>
          </LightTooltip>
        </Slide>
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2500}
        >
          <LightTooltip title="Start searching" arrow>
            <Button
              id="start-searching"
              onClick={handleSearchingState}
              className={classes.button}
            >
              {stateText[state]}
            </Button>
          </LightTooltip>
        </Slide>
        <br />
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2500}
        >
          <Paper className={classes.paperLegends}>
            <Legends alg={alg} />
          </Paper>
        </Slide>
        <Slide
          direction="down"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2500}
        >
          <Grid
            container
            alignContent="center"
            alignItems="center"
            direction="row"
            justify="center"
            spacing={1}
            style={{ margin: "10px 0 0 0" }}
          >
            {data.map((character) => (
              <Grid key={character.index} item>
                <Paper
                  className={classes.characterGrid}
                  style={{ background: character.state }}
                >
                  {" "}
                  {character.value}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Slide>
        <Slide
          direction="down"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={2500}
        >
          <Paper className={classes.paperResult}>
            Found target at index(es): {indexes.toString()}
          </Paper>
        </Slide>
      </Paper>
    </div>
  );
}

function Clone(data) {
  return JSON.parse(JSON.stringify(data));
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomArray() {
  let data = [];
  let n = getRndInteger(50, 90);
  for (let i = 0; i < n; i++) {
    data[i] = getRndInteger(0, 120);
  }
  return data;
}

function generateData(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    result[i] = { index: i, value: input[i], state: REST };
  }
  return result;
}

function sortData(data, setData) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    arr.push(data[i].value);
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < data.length; i++) {
    data[i].value = arr[i];
  }
  setData(Clone(data));
}

function delay(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, x);
  });
}

async function linearSearch(data, setData, target, setIndexes, setState, mode) {
  let tmpIndexes = [];
  for (let i = 0; i < data.length; i++) {
    if (delayTime === 1) {
      data[i].state = CHECKING;
      setData(Clone(data));
      await delay(0);
    }
    if (data[i].value === target) {
      data[i].state = FOUND;
      tmpIndexes.push(i);
      if (mode === "first") {
        break;
      }
    } else {
      data[i].state = WRONG;
    }
    if (delayTime === 1) {
      setData(Clone(data));
      setIndexes(Clone(tmpIndexes));
      await delay(0);
    }
  }
  setData(Clone(data));
  setIndexes(Clone(tmpIndexes));
  setState(2);
}

async function binarySearch(data, setData, target, setIndexes, setState, mode) {
  sortData(data, setData);
  if (delayTime === 1) {
    await delay(0);
  }
  let tmpIndexes = [];
  let mid;
  let low = 0;
  let high = data.length - 1;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (delayTime === 1) {
      data[low].state = BOUNDARY;
      data[high].state = BOUNDARY;
      data[mid].state = CHECKING;
      setData(Clone(data));
      await delay(500);
    }
    if (data[mid].value === target) {
      data[mid].state = FOUND;
      tmpIndexes.push(mid);
      if (mid !== low) {
        data[low].state = REST;
      }
      if (mid !== high) {
        data[high].state = REST;
      }
      if (delayTime === 1) {
        setData(Clone(data));
        setIndexes(Clone(tmpIndexes));
        await delay(100);
      }
      break;
    }
    data[low].state = REST;
    data[high].state = REST;
    data[mid].state = REST;
    setData(Clone(data));
    if (parseInt(data[mid].value) < parseInt(target)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if(mode === "all"){
    let next = tmpIndexes[0] + 1;
    while(parseInt(data[next].value) === parseInt(target)){
      data[next].state = FOUND;
      tmpIndexes.push(next);
      next = next + 1;
      if(delayTime === 1){
        setData(Clone(data));
        setIndexes(Clone(tmpIndexes));
        await delay(0);
      }
    }
    let prev = tmpIndexes[0] - 1;
    while(parseInt(data[prev].value) === parseInt(target)){
      data[prev].state = FOUND;
      tmpIndexes.push(prev);
      prev = prev - 1;
      if(delayTime === 1){
        setData(Clone(data));
        setIndexes(Clone(tmpIndexes));
        await delay(0);
      }
    }
    tmpIndexes.sort(function (a, b) {
      return a - b;
    });
  }
  setData(Clone(data));
  setIndexes(Clone(tmpIndexes));
  setState(2);
}

async function jumpSearch(data, setData, target, setIndexes, setState, mode) {
  sortData(data, setData);
  if (delayTime === 1) {
    await delay(0);
  }
  let tmpIndexes = [];

  let step = Math.floor(Math.sqrt(data.length));
  let prev = 0;

  if(delayTime === 1){
    data[prev].state = IDX;
    setData(Clone(data));
    await delay(0);
  }
  while(parseInt(data[Math.min(step, data.length)-1].value) < parseInt(target)){
    if(delayTime === 1){
      data[step].state = CHECKING;
      setData(Clone(data));
      await delay(10);
    }
    prev = step;
    step = step + Math.floor(Math.sqrt(data.length));
    if(prev >= data.length) break;
    if(delayTime === 1){
      data[prev].state = IDX;
      setData(Clone(data));
      await delay(10);
    }
  }
  while(parseInt(data[prev].value) < parseInt(target)){
    if(delayTime === 1){
      data[prev].state = IDX;
      setData(Clone(data));
      await delay(0);
    }
    prev = prev + 1;
    if(prev === Math.min(step, data.length)) break;
  }
  while(parseInt(data[prev].value) === parseInt(target)){
    data[prev].state = FOUND;
    tmpIndexes.push(prev);
    prev = prev + 1;
    if(delayTime === 1) {
      setData(Clone(data));
      setIndexes(Clone(tmpIndexes));
      await delay(0);
    }
    if(mode === "first") break;
  }

  setData(Clone(data));
  setIndexes(Clone(tmpIndexes));
  setState(2);
}