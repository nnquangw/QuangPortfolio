import React from "react";
import { useStyles } from "../../Styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import { Chart, BarSeries } from "@devexpress/dx-react-chart-material-ui";
import {Animation} from "@devexpress/dx-react-chart";
import Tooltip from "@material-ui/core/Tooltip";
import { Grow, Slide, Zoom } from "@material-ui/core";

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

  const [len, setLength] = React.useState(10); // Array Length
  const [alg, setAlgorithm] = React.useState("selection"); // Algorithm
  const [data, setData] = React.useState(
    GenerateData(RandomArray(10), "selection")
  ); // Generate Data
  const [unSort, setUnSort] = React.useState(deepCopy(data)); // Generate Data
  const [state, setState] = React.useState(0); // Start sorting
  const [count, setCount] = React.useState({ comparison: 0, swap: 0 }); // count
  const [sortCase, setSortCase] = React.useState("random"); // case
  const [ver, setVer] = React.useState("original"); // case
  const handleChangeLen = (event) => {
    if (state !== 1) {
      setLength(event.target.value);
      let tmp;
      switch (sortCase) {
        case "descendant":
          tmp = DescendingArray(event.target.value);
          break;
        case "random":
          tmp = RandomArray(event.target.value);
          break;
        case "ascendant":
          tmp = AscendingArray(event.target.value);
          break;
        default:
          break;
      }
      setData(GenerateData(tmp, alg));
      setUnSort(deepCopy(GenerateData(tmp, alg)));
      setState(0);
      setCount({ comparison: 0, swap: 0 });
    }
  };
  const handleGenerateArray = () => {
    if (state !== 1) {
      let tmp;
      switch (sortCase) {
        case "descendant":
          tmp = DescendingArray(len);
          break;
        case "random":
          tmp = RandomArray(len);
          break;
        case "ascendant":
          tmp = AscendingArray(len);
          break;
        default:
          break;
      }
      setData(GenerateData(tmp, alg));
      setUnSort(deepCopy(GenerateData(tmp, alg)));
      setState(0);
      setCount({ comparison: 0, swap: 0 });
    }
  };
  // Set Algorithm
  const handleChangeAlg = (event) => {
    setAlgorithm(event.target.value);
    setVer("original");
  };
  // Set Sort Case
  const handleChangeSortCase = (event) => {
    setSortCase(event.target.value);
  };
  // Set Version
  const handleChangeVer = (event) => {
    setVer(event.target.value);
  };
  // Start sorting
  const handleState = () => {
    switch (state) {
      case 0:
        delayTime = 1;
        switch (alg) {
          case "selection":
            switch (ver) {
              case "original":
                selectionSort(deepCopy(data), setData, setCount, setState);
                break;
              default:
                break;
            }
            break;
          case "bubble":
            switch (ver) {
              case "original":
                bubbleSort(deepCopy(data), setData, setCount, setState, false);
                break;
              case "optimize":
                bubbleSort(deepCopy(data), setData, setCount, setState, true);
                break;
              case "recursive":
                bubbleSortRecursive(
                  deepCopy(data),
                  setData,
                  count,
                  setCount,
                  data.length
                );
                break;
              default:
                break;
            }
            break;
          case "quick":
            switch (ver) {
              case "original":
                quickSort(
                  deepCopy(data),
                  setData,
                  count,
                  setCount,
                  0,
                  data.length - 1
                );
                break;
              case "iterative":
                quickSortIterative(
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
            break;
          case "merge":
            switch (ver) {
              case "original":
                mergeSort(
                  deepCopy(data),
                  setData,
                  count,
                  setCount,
                  0,
                  data.length - 1
                );
                break;
              case "iterative":
                mergeSortIterative(deepCopy(data), setData, count, setCount);
                break;
              default:
                break;
            }
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
      <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={2000}>
        <Paper className={classes.paper}>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={2500}
          >
            <FormControl className={classes.formControl}>
              <InputLabel id="set-array-length">Set Array Length</InputLabel>
              <Select
                labelId="set-array-length-label"
                id="set-array-length"
                value={len}
                onChange={handleChangeLen}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={40}>40</MenuItem>
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
              <InputLabel id="set-array-length">Set Algorithm</InputLabel>
              <Select
                labelId="set-array-length-label"
                id="set-array-length"
                value={alg}
                onChange={handleChangeAlg}
              >
                <MenuItem value={"selection"}>Selection Sort</MenuItem>
                <MenuItem value={"bubble"}>Bubble Sort</MenuItem>
                <MenuItem value={"quick"}>Quick Sort</MenuItem>
                <MenuItem value={"merge"}>Merge Sort</MenuItem>
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
              <InputLabel id="set-version">Set Version</InputLabel>
              <Select
                labelId="set-version-label"
                id="set-version"
                value={ver}
                onChange={handleChangeVer}
              >
                <MenuItem value={"original"}>Original</MenuItem>
                {["bubble"].includes(alg) ? (
                  <MenuItem value={"optimize"}>Optimize</MenuItem>
                ) : null}
                {["bubble"].includes(alg) ? (
                  <MenuItem value={"recursive"}>Recursive</MenuItem>
                ) : null}
                {["quick", "merge"].includes(alg) ? (
                  <MenuItem value={"iterative"}>Iterative</MenuItem>
                ) : null}
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
              <InputLabel id="set-order">Set Order</InputLabel>

              <Select
                labelId="set-order-label"
                id="set-order"
                value={sortCase}
                onChange={handleChangeSortCase}
              >
                <MenuItem value={"descendant"}>
                  <LightTooltip
                    title={
                      <span style={{ fontSize: "1rem" }}>
                        Reverse sorted array
                      </span>
                    }
                    placement="right"
                    TransitionComponent={Zoom}
                    arrow
                  >
                    <div style={{ width: "100%" }}>Descending</div>
                  </LightTooltip>
                </MenuItem>
                <MenuItem value={"random"}>
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
                    <div style={{ width: "100%" }}>Random</div>
                  </LightTooltip>
                </MenuItem>
                <MenuItem value={"ascendant"}>
                  <LightTooltip
                    title={
                      <span style={{ fontSize: "1rem" }}>
                        Already sorted array
                      </span>
                    }
                    placement="right"
                    TransitionComponent={Zoom}
                    arrow
                  >
                    <div style={{ width: "100%" }}>Ascending</div>
                  </LightTooltip>
                </MenuItem>
              </Select>
            </FormControl>
          </Slide>
          <Information alg={alg} ver={ver} />

          <Grow in={true} mountOnEnter unmountOnExit timeout={2500}>
            <Button
              id="generate-array"
              onClick={(event) => handleGenerateArray(event)}
              className={classes.button}
            >
              Generate
            </Button>
          </Grow>
          <Grow in={true} mountOnEnter unmountOnExit timeout={2500}>
            <Button
              id="start-sorting"
              onClick={(event) => handleState(event)}
              className={classes.buttonStart}
            >
              {stateText[state]}
            </Button>
          </Grow>
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={2500}
          >
            <Paper className={classes.paperCount}>
              <div style={{ padding: "2px 2px" }}>
                Comparison: {count["comparison"]}
                <br />
                Swap: {count["swap"]}
              </div>
            </Paper>
          </Slide>

          <Grow in={true} mountOnEnter unmountOnExit timeout={2500}>
            <Paper className={classes.paperLegends}>
              <Legends alg={alg} />
            </Paper>
          </Grow>
          <div style={{ padding: "10px 0 0 0" }}>
            <Chart data={data} className={classes.chart} height={470}>
              <BarSeries
                key="value"
                valueField="value"
                argumentField="index"
                barWidth={1 - 0.001 * data.length}
                color="#9e9e9e"
              />
              <BarSeries
                key="idx"
                valueField="idx"
                argumentField="index"
                barWidth={1 - 0.001 * data.length}
                color="#5d4037"
              />
              <BarSeries
                key="min"
                valueField="min"
                argumentField="index"
                barWidth={1 - 0.001 * data.length}
                color="#7b1fa2"
              />
              <BarSeries
                key="left"
                valueField="left"
                argumentField="index"
                barWidth={1 - 0.001 * data.length}
                color="#f57c00"
              />
              <BarSeries
                key="right"
                valueField="right"
                argumentField="index"
                barWidth={1 - 0.001 * data.length}
                color="#0097a7"
              />
              <BarSeries
                key="swap"
                valueField="swap"
                argumentField="index"
                barWidth={1 - 0.001 * data.length}
                color="#c2185b"
              />
              <BarSeries
                key="sorted"
                valueField="sorted"
                argumentField="index"
                barWidth={1 - 0.001 * data.length}
                color="#afb42b"
              />
              <Animation />
            </Chart>
          </div>
        </Paper>
      </Slide>
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

function GenerateData(arr, alg) {
  let data = [];

  for (let i = 0; i < arr.length; i++) {
    data.push({
      index: i.toString(),
      value: arr[i],
      idx: 0,
      swap: 0,
      sorted: 0,
      min: 0,
      left: 0,
      right: 0,
      pivot: 0,
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

async function bubbleSortRecursive(data, setData, count, setCount, n) {
  if (n > 1) {
    let swap = 0;
    let comparison = 0;
    for (let i = 0; i < n - 1; i++) {
      comparison = comparison + 1;
      if (delayTime === 1) {
        data[i].idx = data[i].value;
        setData([...data]);
        setCount({
          comparison: count["comparison"] + comparison,
          swap: count["swap"] + swap,
        });
        await delay(0);
        data[i].idx = 0;
      }
      if (data[i].value > data[i + 1].value) {
        [data[i].value, data[i + 1].value] = [data[i + 1].value, data[i].value];
        swap = swap + 1;
        if (delayTime === 1) {
          [data[i].swap, data[i + 1].swap] = [data[i].value, data[i + 1].value];
          setData([...data]);
          setCount({
            comparison: count["comparison"] + comparison,
            swap: count["swap"] + swap,
          });
          await delay(0);
          [data[i].swap, data[i + 1].swap] = [0, 0];
        }
      }
    }
    data[n - 1].sorted = data[n - 1].value;
    setData([...data]);
    setCount({
      comparison: count["comparison"] + comparison,
      swap: count["swap"] + swap,
    });
    count = {
      comparison: count["comparison"] + comparison,
      swap: count["swap"] + swap,
    };
    bubbleSortRecursive(data, setData, count, setCount, n - 1);
  }
}

async function quickSort(data, setData, count, setCount, low, high) {
  if (low < high) {
    // Partition
    let pivot = data[high];
    let i = low - 1;
    let comparison = count["comparison"];
    let swap = count["swap"];
    if (delayTime === 1) {
      [data[low].left, data[high].right] = [data[low].value, data[high].value];
    }
    for (let j = low; j <= high - 1; j++) {
      comparison = comparison + 1;
      if (delayTime === 1) {
        data[j].idx = data[j].value;
        setData([...data]);
        setCount({ comparison, swap });
        await delay(0);
        data[j].idx = 0;
      }
      if (data[j].value < pivot.value) {
        swap = swap + 1;
        if (i > low - 1) {
          data[i].min = 0;
        }
        i++;
        [data[i].value, data[j].value] = [data[j].value, data[i].value];
        if (i === low) {
          data[low].left = data[low].value;
        }
        if (delayTime === 1) {
          data[i].min = data[i].value;
          data[j].swap = data[j].value;
          setData([...data]);
          setCount({ comparison, swap });
          await delay(0);
          data[j].swap = 0;
        }
      }
    }
    swap = swap + 1;
    if (i > low - 1) {
      data[i].min = 0;
    }
    [data[i + 1].value, data[high].value] = [
      data[high].value,
      data[i + 1].value,
    ];
    if (delayTime === 1) {
      data[i + 1].min = data[i + 1].value;
      data[high].right = data[high].value;
      setData([...data]);
      await delay(0);
    }
    data[i + 1].min = 0;
    [data[low].left, data[high].right] = [0, 0];
    setData([...data]);
    setCount({ comparison, swap });
    count = { comparison, swap };
    if (delayTime === 1) {
      await delay(0);
    }
    let pi = i + 1;

    quickSort(data, setData, count, setCount, low, pi - 1);
    quickSort(data, setData, count, setCount, pi + 1, high);
  }
}

async function quickSortIterative(
  data,
  setData,
  count,
  setCount,
  setState,
  low,
  high
) {
  // Creat an auxiliary stack
  let stack = new Array(high - low + 1);
  // Initialize top of stack
  let top = -1;
  // Push initial values of low and high to stack
  top = top + 1;
  stack[top] = low;
  top = top + 1;
  stack[top] = high;
  // Initialize pi for pivot
  let pi;
  // Keep popping from stack while is not empty
  while (top >= 0) {
    // Pop high and low
    high = stack[top];
    top = top - 1;
    low = stack[top];
    top = top - 1;
    // Partition time
    let pivot = data[high];
    let i = low - 1;
    let comparison = count["comparison"];
    let swap = count["swap"];
    if (delayTime === 1) {
      [data[low].left, data[high].right] = [data[low].value, data[high].value];
    }
    for (let j = low; j <= high - 1; j++) {
      comparison = comparison + 1;
      if (delayTime === 1) {
        data[j].idx = data[j].value;
        setData([...data]);
        setCount({ comparison, swap });
        await delay(0);
        data[j].idx = 0;
      }
      if (data[j].value < pivot.value) {
        swap = swap + 1;
        if (i > low - 1) {
          data[i].min = 0;
        }
        i++;
        [data[i].value, data[j].value] = [data[j].value, data[i].value];
        if (i === low) {
          data[low].left = data[low].value;
        }
        if (delayTime === 1) {
          data[i].min = data[i].value;
          data[j].swap = data[j].value;
          setData([...data]);
          setCount({ comparison, swap });
          await delay(0);
          data[j].swap = 0;
        }
      }
    }
    swap = swap + 1;
    if (i > low - 1) {
      data[i].min = 0;
    }
    [data[i + 1].value, data[high].value] = [
      data[high].value,
      data[i + 1].value,
    ];
    if (delayTime === 1) {
      data[i + 1].min = data[i + 1].value;
      data[high].right = data[high].value;
      setData([...data]);
      await delay(0);
    }
    data[i + 1].min = 0;
    [data[low].left, data[high].right] = [0, 0];
    setData([...data]);
    setCount({ comparison, swap });
    count = { comparison, swap };
    if (delayTime === 1) {
      await delay(0);
    }
    pi = i + 1;
    // If there are elements on left side of pivot,
    // then push them to stack
    if (pi - 1 > low) {
      top = top + 1;
      stack[top] = low;
      top = top + 1;
      stack[top] = pi - 1;
    }
    // If there are elements on right side of pivot,
    // then push them to stack
    if (pi + 1 < high) {
      top = top + 1;
      stack[top] = pi + 1;
      top = top + 1;
      stack[top] = high;
    }
  }
  setState(2);
}

async function mergeSort(data, setData, count, setCount, left, right) {
  if (left < right) {
    let middle = Math.floor(left + (right - left) / 2);

    let count1 = await mergeSort(data, setData, count, setCount, left, middle);
    let count2 = await mergeSort(
      data,
      setData,
      count,
      setCount,
      middle + 1,
      right
    );

    count = { ...count, comparison: count["comparison"] + count1 + count2 };
    let count3 = await merge(
      data,
      setData,
      count,
      setCount,
      left,
      middle,
      right
    );
    count = { ...count, comparison: count3 };
    setCount({ ...count });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(count["comparison"]);
    }, 0);
  });
}

async function merge(data, setData, count, setCount, left, middle, right) {
  let comparison = count["comparison"];
  // Merge
  if (delayTime === 1) {
    [data[left].left, data[middle].min, data[right].right] = [
      data[left].value,
      data[middle].value,
      data[right].value,
    ];
    if (middle === left) {
      data[middle].min = 0;
    }
    setData([...data]);
    await delay(0);
  }
  let i, j, k;
  let n1 = middle - left + 1;
  let n2 = right - middle;
  let sub1 = new Array(n1);
  let sub2 = new Array(n2);
  for (i = 0; i < n1; i++) {
    sub1[i] = data[left + i].value;
  }
  for (j = 0; j < n2; j++) {
    sub2[j] = data[middle + 1 + j].value;
  }
  [i, j, k] = [0, 0, left];

  while (i < n1 && j < n2) {
    comparison = comparison + 1;
    if (sub1[i] > sub2[j]) {
      data[k].value = sub2[j];
      j++;
    } else {
      data[k].value = sub1[i];
      i++;
    }
    if (delayTime === 1) {
      if (k === left) {
        data[left].left = data[k].value;
      } else if (k === middle) {
        data[middle].min = data[k].value;
      } else if (k === right) {
        data[right].right = data[k].value;
      } else {
        data[k].swap = data[k].value;
      }
      setData([...data]);
      setCount({
        ...count,
        comparison,
      });
      await delay(0);
    }
    k++;
  }
  while (i < n1) {
    data[k].value = sub1[i];
    if (delayTime === 1) {
      if (k === left) {
        data[left].left = data[k].value;
      } else if (k === middle) {
        data[middle].min = data[k].value;
      } else if (k === right) {
        data[right].right = data[k].value;
      } else {
        data[k].swap = data[k].value;
      }
      setData([...data]);
      await delay(0);
    }
    i++;
    k++;
  }
  while (j < n2) {
    data[k].value = sub2[j];
    if (delayTime === 1) {
      if (k === left) {
        data[left].left = data[k].value;
      } else if (k === middle) {
        data[middle].min = data[k].value;
      } else if (k === right) {
        data[right].right = data[k].value;
      } else {
        data[k].swap = data[k].value;
      }
      setData([...data]);
      await delay(0);
    }
    j++;
    k++;
  }
  data[left].left = data[middle].min = data[right].right = 0;
  for (let p = left; p <= right; p++) {
    data[p].swap = 0;
  }
  count = { ...count, comparison };
  setData([...data]);
  setCount({ ...count });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(count["comparison"]);
    }, 0);
  });
}

async function mergeSortIterative(data, setData, count, setCount) {
  let curr_size;
  let left;
  let length = data.length;
  for (curr_size = 1; curr_size <= length - 1; curr_size = 2 * curr_size) {
    for (left = 0; left < length - 1; left += 2 * curr_size) {
      let middle = Math.min(left + curr_size - 1, length - 1);
      let right = Math.min(left + 2 * curr_size - 1, length - 1);
      // Merge
      let comparison;
      comparison = await merge(
        data,
        setData,
        count,
        setCount,
        left,
        middle,
        right
      );
      count = { ...count, comparison };
    }
  }
}
