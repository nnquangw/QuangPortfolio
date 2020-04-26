import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Introduce yourself",
        completed: false
      },
      {
        id: 2,
        title: "Sorting algorithms",
        completed: false
      },
      {
        id: 3,
        title: "Virtual piano",
        completed: false
      }
    ]
  }
  render() {

    return (
      <div className="App">
        <h1> Alo alo</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
