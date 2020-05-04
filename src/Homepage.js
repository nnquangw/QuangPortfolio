import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import Header from "./components/Header";
import "./Homepage.css";

import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from '@material-ui/icons/BarChart';
import StraightenIcon from '@material-ui/icons/Straighten';


class Homepage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="column">
            <Sidebar items={items} />
          </div>
          <div className="column">
              sss123
          </div>
        </div>
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
      { name: "piano", label: "Virtual Piano", onClick},
    ],
  },
  "divider"
];
export default Homepage;
