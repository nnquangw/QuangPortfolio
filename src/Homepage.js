import React, { Component } from "react";
import Sidebar from "./components/Sidebar";

import Header from "./components/Header";
import "./Homepage.css";

import Container from '@material-ui/core/Container';
import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from '@material-ui/icons/BarChart';
import StraightenIcon from '@material-ui/icons/Straighten';

import GeneralInformation from "./components/GeneralInformation";

class Homepage extends Component {
  render() {
    return (
      <div>
        {/* <Header/> */}
        <Sidebar items={items} />

        {/* <div className="row">
          <div className="column">
            
          </div>
          <Container classes="column" component="div" maxwidth={false}>
            {contents}
          </Container>
        </div> */}
      </div>
    );
  }
}
function onClick(e, item) {
  contents = item;
}
var contents = <GeneralInformation/>;
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

  {
    name: "visualization",
    label: "Algorithms Visualization",
    Icon: BarChartIcon,
    items: [
      { name: "sorting", label: "Sorting Algorithms", onClick },
      { name: "searching", label: "Searching Algorithms", onClick },
    ],
  },
 
  {
    name: "app",
    label: "Simulator",
    Icon: StraightenIcon,
    items: [
      { name: "piano", label: "Virtual Piano", onClick},
    ],
  },

];
export default Homepage;
