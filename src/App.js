import React, { Component } from "react";
import Homepage from "./components/Homepage";

import "./App.css";

import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";
import StraightenIcon from "@material-ui/icons/Straighten";

class App extends Component {
  render() {
    return (
      <div>
        <Homepage items={items} />
      </div>
    );
  }
}

const items = [
  {
    id: "00",
    name: "Introduction",
    label: "Introduction",
    Icon: HomeIcon,
    items: [
      { id: "01", name: "GeneralInformation", label: "General Information" },
      { id: "02", name: "Education", label: "Education" },
      { id: "03", name: "Objective", label: "Objective" },
    ],
  },
  "divider",
  {
    id: "10",
    name: "AlgorithmsVisualization",
    label: "Algorithms Visualization",
    Icon: BarChartIcon,
    items: [
      { id: "11", name: "SortingAlgorithms", label: "Sorting Algorithms" },
      { id: "12", name: "SearchingAlgorithms", label: "Searching Algorithms" },
    ],
  },
  "divider",
  {
    id: "20",
    name: "Simlulator",
    label: "Simulator",
    Icon: StraightenIcon,
    items: [{ id: "21", name: "VirtualPiano", label: "Virtual Piano" }],
  },

];
export default App;
