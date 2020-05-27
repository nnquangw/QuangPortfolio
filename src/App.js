import React, { Component } from "react";
import Homepage from "./components/Homepage";

import "./App.css";

import PersonIcon from "@material-ui/icons/Person";
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
    Icon: PersonIcon,
    items: [{ id: "01", name: "AboutMe", label: "About Me" }],
  },
  "divider",
  {
    id: "10",
    name: "Visualizer",
    label: "Visualizer",
    Icon: BarChartIcon,
    items: [
      { id: "11", name: "Sorting", label: "Sorting" },
      { id: "12", name: "Searching", label: "Searching" },
    ],
  },
  "divider",
  {
    id: "20",
    name: "MusicApps",
    label: "Music Apps",
    Icon: StraightenIcon,
    items: [
      { id: "21", name: "VirtualPiano", label: "Virtual Piano" },
      { id: "22", name: "ToneMemorize", label: "Tone Memorize" },
    ],
  },
  "divider",
];
export default App;
