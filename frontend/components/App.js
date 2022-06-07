import React from 'react';
import axios from 'axios';

import Form from './Form';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  state = {
    todos: []
  };

  fetchTodos = () => {
    axios.get(URL)
    .then(res => {
      console.log(res)
      this.setState({
        ...this.state, todos: res.data.data
      })
    })
    .catch(err => {
      console.error(err)
    })
  };

  componentDidMount() {
    this.fetchTodos()
  };

  render() {
    return (
      <div>
        <div id="todos">
          <h2>Todos:</h2>
          {
            this.state.todos.map(todo => {
              return <div key={todo.id}>{todo.name}</div>
            })
          }
        </div>
        <Form />
      </div>
    )
  }
}
