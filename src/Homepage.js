import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import "./Homepage.css";

import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from '@material-ui/icons/BarChart';
import StraightenIcon from '@material-ui/icons/Straighten'

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <h1> Nguyen Nhat Quang</h1>
        <Sidebar items={items} />
      </div>
    );
  }
}
function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const items = [
  {
    name: "introduction",
    label: "Introduction",
    Icon: HomeIcon,
    items: [
      { name: "general", label: "General Information", onClick },
      { name: "education", label: "Education", onClick },
      { name: "objective", label: "Objective", onClick },
    ],
  },
  "divider",
  {
    name: "visualization",
    label: "Algorithms Visualization",
    Icon: BarChartIcon,
    items: [
      { name: "sorting", label: "Sorting Algorithms", onClick },
      { name: "searching", label: "Searching Algorithms", onClick },
    ],
  },
  "divider",
  {
    name: "app",
    label: "Simulator",
    Icon: StraightenIcon,
    items: [
      { name: "piano", label: "Virtual Piano" },
    ],
  },
  "divider"
];
export default Homepage;
