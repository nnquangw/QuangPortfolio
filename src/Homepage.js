import React, { Component } from 'react';
import SideMenu from './components/SideMenu';
import './Homepage.css';


class Homepage extends Component {

  render() {

    return (
      <div className="Homepage" >
        <h1> Nguyen Nhat Quang</h1>
        <SideMenu items={items}/>
      </div>

    );
  }
}

const items = [
  { name: 'introduction', label:'Introduction' },
  { name: 'sorting', label:'Sorting Algorithms'},
  { name: 'piano', label:'Virtual Piano'}
]
export default Homepage;
