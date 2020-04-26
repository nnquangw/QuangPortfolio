import React from 'react';



class Todos extends React.Component {
  render(){
    console.log(this.props.todos)
    return this.props.todos.map((todo) => (
      <h3> { todo.title}</h3>
    ));
  }
}

export default Todos;
