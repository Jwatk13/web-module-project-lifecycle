import React from 'react';

export default class Todo extends React.Component {
  render() {
    return (
      <div 
        onClick={this.props.toggler(this.props.todo.id)} 
      >
        {this.props.todo.name}
        {this.props.todo.completed ? '✔️' : ""} 
      </div>
    )
  }
}
