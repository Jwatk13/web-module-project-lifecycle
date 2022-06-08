import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <div id="todos">
          <h2>Todos:</h2>
          {
            this.props.todos.reduce((acc, todo) => {
              if (this.props.displayComplete || !todo.completed) return acc.concat(
                <Todo 
                  todo={todo}
                  toggler={this.props.toggler}
                  key={todo.id}
                />
              )
              return acc
            }, [])
          }
        </div>
    )
  }
}
