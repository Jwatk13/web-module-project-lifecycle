import React from 'react';
import axios from 'axios';

import Form from './Form';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  state = {
    todos: [],
    todoInput: ''
  };

  handleChange = (evt) => {
    const { value } = evt.target
    this.setState({
     ...this.state, todoInput: value
    })
  };

  postTodos = () => {
    axios.post(URL, { name: this.state.todoInput })
      .then(res => {
        console.log(res.data.message)
        this.fetchTodos
      })
      .catch(err => {
        console.error(err)
      })
  };

   handleSubmit = () => {
    // evt.preventDefault()
    this.postTodos()
    this.setState({
      todoInput: ""
    })
  }

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
        <form onSubmit={this.handleSubmit} id="todoForm">
          <input
            onChange={this.handleChange} 
            value={this.state.todoInput}   
            type="text" 
            placeholder='Type Todo...'>
          </input>
          <input type="submit"></input>
          <button>Clear Completed!</button>
        </form>
      </div>
    )
  }
}
