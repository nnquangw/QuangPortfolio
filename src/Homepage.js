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
    id: "00",
    name: "introduction",
    label: "Introduction",
    Icon: HomeIcon,
    items: [
      { id: "01", name: "general", label: "General Information", onClick },
      { id: "02", name: "education", label: "Education", onClick },
      { id: "03", name: "objective", label: "Objective", onClick },
    ],
  },

  {
    id: "10",
    name: "visualization",
    label: "Algorithms Visualization",
    Icon: BarChartIcon,
    items: [
      { id: "11", name: "sorting", label: "Sorting Algorithms", onClick },
      { id: "12", name: "searching", label: "Searching Algorithms", onClick },
    ],
  },
 
  {
    id: "20",
    name: "app",
    label: "Simulator",
    Icon: StraightenIcon,
    items: [
      { id: "21", name: "piano", label: "Virtual Piano", onClick},
    ],
  },

];
export default Homepage;
