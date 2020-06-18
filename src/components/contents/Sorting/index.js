import React from "react";
import { useStyles } from "../../Styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import { Chart } from "@devexpress/dx-react-chart-material-ui";
import { BarSeries } from "@devexpress/dx-react-chart";
import { Animation } from "@devexpress/dx-react-chart";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
// import selectionSort from "./algorithms/selectionSort";
import Information from "./Information";
import Legends from "./Legends";

var delayTime = 1;
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

export default function Sorting() {
  const classes = useStyles();

  const [len, setLength] = React.useState(30); // Array Length
  const [alg, setAlgorithm] = React.useState("selection"); // Algorithm
  const [data, setData] = React.useState(GenerateData(RandomArray(30))); // Generate Data
  const [unSort, setUnSort] = React.useState(deepCopy(data)); // Generate Data
  const [state, setState] = React.useState(0); // Start sorting
  const [count, setCount] = React.useState({ comparison: 0, swap: 0 }); // count
  const [sortCase, setSortCase] = React.useState("average"); // case

  const handleChangeLen = (event) => {
    if (state !== 1) {
      setLength(event.target.value);
      let tmp = RandomArray(event.target.value);
      setData(GenerateData(tmp));
      setUnSort(deepCopy(GenerateData(tmp)));
      setState(0);
      setCount({ comparison: 0, swap: 0 });
    }
  };
  const handleGenerateArray = (event) => {
    if (state !== 1) {
      let tmp;
      switch (sortCase) {
        case "worst":
          tmp = DescendingArray(len);
          break;
        case "average":
          tmp = RandomArray(len);
          break;
        case "best":
          tmp = AscendingArray(len);
          break;
        default:
          break;
      }
      setData(GenerateData(tmp));
      setUnSort(deepCopy(GenerateData(tmp)));
      setState(0);
      setCount({ comparison: 0, swap: 0 });
    }
  };
  // Set Algorithm
  const handleChangeAlg = (event) => {
    setAlgorithm(event.target.value);
  };
  // Set Sort Case
  const handleChangeSortCase = (event) => {
    setSortCase(event.target.value);
  };
  // Start sorting
  const handleState = (event) => {
    switch (state) {
      case 0:
        delayTime = 1;
        switch (alg) {
          case "selection":
            selectionSort(deepCopy(data), setData, setCount, setState);
            break;
          case "bubble":
            bubbleSort(deepCopy(data), setData, setCount, setState, false);
            break;
          case "bubbleOptimized":
            bubbleSort(deepCopy(data), setData, setCount, setState, true);
            break;
          case "quick":
            quickSort(
              deepCopy(data),
              setData,
              count,
              setCount,
              setState,
              0,
              data.length - 1
            );
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
        setData(deepCopy(unSort));
        setState(0);
        setCount({ comparison: 0, swap: 0 });
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
        <FormControl className={classes.formControl}>
          <InputLabel id="set-array-length">Set Array Length</InputLabel>
          <Select
            labelId="set-array-length-label"
            id="set-array-length"
            value={len}
            onChange={handleChangeLen}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="set-array-length">Set Algorithm</InputLabel>
          <Select
            labelId="set-array-length-label"
            id="set-array-length"
            value={alg}
            onChange={handleChangeAlg}
          >
            <MenuItem value={"selection"}>Selection Sort</MenuItem>
            <MenuItem value={"bubble"}>Bubble Sort</MenuItem>
            <MenuItem value={"bubbleOptimized"}>
              Bubble Sort (Optimized)
            </MenuItem>
            <MenuItem value={"quick"}>Quick Sort</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="set-sort-case">Set Sorting Case</InputLabel>

          <Select
            labelId="set-sort-case-label"
            id="set-case"
            value={sortCase}
            onChange={handleChangeSortCase}
          >
            <MenuItem value={"worst"}>
              <LightTooltip
                title={
                  <span style={{ fontSize: "1rem" }}>Reverse sorted array</span>
                }
                placement="right"
                TransitionComponent={Zoom}
                arrow
              >
                <div style={{ width: "100%" }}>Worst</div>
              </LightTooltip>
            </MenuItem>
            <MenuItem value={"average"}>
              <LightTooltip
                title={
                  <span style={{ fontSize: "1rem" }}>
                    Randomly value arrangement array
                  </span>
                }
                placement="right"
                TransitionComponent={Zoom}
                arrow
              >
                <div style={{ width: "100%" }}>Average</div>
              </LightTooltip>
            </MenuItem>
            <MenuItem value={"best"}>
              <LightTooltip
                title={
                  <span style={{ fontSize: "1rem" }}>Already sorted array</span>
                }
                placement="right"
                TransitionComponent={Zoom}
                arrow
              >
                <div style={{ width: "100%" }}>Best</div>
              </LightTooltip>
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          id="generate-array"
          onClick={(event) => handleGenerateArray(event)}
          className={classes.button}
        >
          Generate
        </Button>
        <Button
          id="start-sorting"
          onClick={(event) => handleState(event)}
          className={classes.buttonStart}
        >
          {stateText[state]}
        </Button>
        <Information alg={alg} />
        <Paper className={classes.paperCount}>
          Comparison: {count["comparison"]}
          <br />
          Swap: {count["swap"]}
        </Paper>
        <Paper className={classes.paperLegends}>
          <Legends alg={alg} />
        </Paper>
        <Chart data={data} className={classes.chart} height={430}>
          <BarSeries
            valueField="value"
            argumentField="index"
            barWidth={1 - 0.001 * data.length}
            color="#9e9e9e"
          />
          <BarSeries
            valueField="idx"
            argumentField="index"
            barWidth={1 - 0.001 * data.length}
            color="#5d4037"
          />
          <BarSeries
            valueField="min"
            argumentField="index"
            barWidth={1 - 0.001 * data.length}
            color="#7b1fa2"
          />
          <BarSeries
            valueField="swap"
            argumentField="index"
            barWidth={1 - 0.001 * data.length}
            color="#c2185b"
          />
          <BarSeries
            valueField="sorted"
            argumentField="index"
            barWidth={1 - 0.001 * data.length}
            color="#afb42b"
          />
          {/* <Animation/> */}
        </Chart>
      </Paper>
    </div>
  );
}
function deepCopy(data) {
  let tmp = [];
  for (let i = 0; i < data.length; i++) {
    const obj = Object.assign({}, data[i]);
    tmp.push({ ...obj });
  }
  return tmp;
}
function RandomArray(n) {
  var arr = [];
  while (arr.length < n) {
    var r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
function AscendingArray(n) {
  var arr = RandomArray(n);
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}
function DescendingArray(n) {
  var arr = RandomArray(n);
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr;
}

function GenerateData(arr) {
  let data = [];
  for (let i = 0; i < arr.length; i++) {
    data.push({
      index: i.toString(),
      value: arr[i],
      idx: 0,
      swap: 0,
      sorted: 0,
      min: 0,
    });
  }
  return data;
}

function delay(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, x);
  });
}

async function selectionSort(data, setData, setCount, setState) {
  let swap = 0;
  let comparison = 0;
  for (let i = 0; i < data.length; i++) {
    let min = i;
    if (delayTime === 1) {
      data[i].idx = data[i].value;
      setData([...data]);
      await delay(0);
    }
    for (let j = i + 1; j < data.length; j++) {
      comparison = comparison + 1;
      if (delayTime === 1) {
        data[j].idx = data[j].value;
        setData([...data]);
        setCount({ comparison, swap });
        await delay(0);
        data[j].idx = 0;
      }
      if (data[j].value < data[min].value) {
        data[min].min = 0;
        min = j;
        data[min].min = data[min].value;
        if (delayTime === 1) {
          setData([...data]);
        }
      }
    }
    data[i].idx = 0;
    if (min !== i) {
      swap = swap + 1;
      data[min].min = 0;
      [data[i].value, data[min].value] = [data[min].value, data[i].value];
      if (delayTime === 1) {
        [data[i].swap, data[min].swap] = [data[i].value, data[min].value];
        setData([...data]);
        setCount({ comparison, swap });
        await delay(20);
        [data[i].swap, data[min].swap] = [0, 0];
      }
    }
    data[i].sorted = data[i].value;
    if (delayTime === 1) {
      setData([...data]);
    }
  }

  if (delayTime === 0) {
    setData([...data]);
    setCount({ comparison, swap });
  }
  setState(2);
}

async function bubbleSort(data, setData, setCount, setState, optimize) {
  let swap = 0;
  let comparison = 0;
  let prev_swap = 0;
  for (let i = 0; i < data.length; i++) {
    prev_swap = swap;
    for (let j = 0; j < data.length - i - 1; j++) {
      comparison = comparison + 1;
      if (delayTime === 1) {
        data[j].idx = data[j].value;
        setData([...data]);
        setCount({ comparison, swap });
        await delay(0);
        data[j].idx = 0;
      }
      if (data[j].value > data[j + 1].value) {
        [data[j].value, data[j + 1].value] = [data[j + 1].value, data[j].value];
        swap = swap + 1;
        if (delayTime === 1) {
          [data[j].swap, data[j + 1].swap] = [data[j].value, data[j + 1].value];
          setData([...data]);
          setCount({ comparison, swap });
          await delay(20);
          [data[j].swap, data[j + 1].swap] = [0, 0];
        }
      }
    }

    if (optimize === true) {
      if (swap === prev_swap) {
        setData([...data]);
        break;
      }
    }
    data[data.length - i - 1].sorted = data[data.length - i - 1].value;
    if (delayTime === 1) {
      setData([...data]);
    }
  }
  if (delayTime === 0) {
    setData([...data]);
    setCount({ comparison, swap });
  }
  setState(2);
}

function partition(data, setData, count,  low, high) {
  let pivot = data[high];
  let i = low - 1;
  let comparison = count["comparison"];
  let swap = count["swap"];
  for (let j = low; j <= high - 1; j++) {
    comparison = comparison + 1;
    // if(delayTime === 1){
    //   data[j].idx = data[j].value;
    //   setData([...data]);
    //   // setCount({comparison, swap});
    //   await delay(0);
    //   data[j].idx = 0;
    // }
    if (data[j].value < pivot.value) {
      swap = swap + 1;
      i++;
      [data[i].value, data[j].value] = [data[j].value, data[i].value];
      // if(delayTime === 1){
      //   [data[i].swap, data[j].swap] = [data[i].value, data[j].value];
      //   setData([...data]);
      //   // setCount({comparison, swap});
      //   await delay(0);
      //   [data[i].swap, data[j].swap] = [0, 0];
      // }
    }
  }
  swap=swap+1;
  [data[i + 1].value, data[high].value] = [data[high].value, data[i + 1].value];
  // if(delayTime === 1){
  //   [data[i+1].swap, data[high].swap] = [data[i+1].value, data[high].value];
  //   setData([...data]);
  //   // setCount({comparison, swap});
  //   await delay(0);
  //   [data[i+1].swap, data[high].swap] = [0, 0];
  // }
  setData([...data]);
  
  return [i + 1, {comparison, swap}];
}
function quickSort(data, setData, count, setCount, setState, low, high) {
  if (low < high) {
    let pi;
    [pi, count] = partition(data, setData, count, low, high);
    setCount(count);
    
    quickSort(data, setData, count, setCount, setState, low, pi - 1);
    quickSort(data, setData, count, setCount, setState, pi + 1, high);

  } else {
    if (low === 0 && high === data.length - 1) {
      setState(2);
    }
  }
}
