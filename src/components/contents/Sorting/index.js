import React from "react";
import { useStyles } from "../../Styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Display from "./Display";

function RandomArray(n) {
  var arr = [];
  while (arr.length < n) {
    var r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

export default function Sorting() {
  const classes = useStyles();
  const [len, setLength] = React.useState(10);

  const handleChangeLen = (event) => {
    setLength(event.target.value);
  };

  const [alg, setAlgorithm] = React.useState("Selection");

  const handleChangeAlg = (event) => {
    setAlgorithm(event.target.value);
  };
  const [arr, setArr] = React.useState([]);
  const handleGenerateArr = (event) => {
    let tmp = RandomArray(len);
    setArr(tmp);
  };

  return (
    <div className={classes.visualizer}>
      <FormControl className={classes.formControl}>
        <InputLabel id="set-array=length">Set Array Length</InputLabel>
        <Select
          labelId="set-array=length-label"
          id="set-array=length"
          value={len}
          onChange={handleChangeLen}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="set-array=length">Set Algorithm</InputLabel>
        <Select
          labelId="set-array=length-label"
          id="set-array=length"
          value={alg}
          onChange={handleChangeAlg}
        >
          <MenuItem value={"Selection"}>Selection Sort</MenuItem>
          <MenuItem value={"Bubble"}>Bubble Sort</MenuItem>
          <MenuItem value={"Quick"}>Quick Sort</MenuItem>
        </Select>
      </FormControl>
      <Button id="generate-array" onClick={(event) => handleGenerateArr(event)} className={classes.button}>
        Generate Array
      </Button>
      {arr}
      <Display/>
    </div>
  );
}
