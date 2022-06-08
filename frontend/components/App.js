import React from 'react';
import axios from 'axios';

import Form from './Form';
import TodoList from './TodoList';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  state = {
    todos: [],
    todoInput: '',
    displayComplete: true,
  };

  handleChange = (evt) => {
    const { value } = evt.target
    this.setState({
     ...this.state, todoInput: value
    })
  };

  resetForm = () => {
    this.setState({ ...this.state, todoInput: "" })
  };

  postTodos = () => {
    axios.post(URL, { name: this.state.todoInput })
      .then(res => {
        this.fetchTodos
        this.resetForm
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

  toggler = id => () => {
    axios.patch(`${URL}/${id}`)
      .then(res => {
        this.setState({
          ...this.state, todos: this.state.todos.map(td => {
            if (td.id !== id) return td;
            return res.data.data
          })
        })
      })
      .catch(err => {
        console.error(err)
      })
  };

  toggleComplete = () => {
    this.setState({ ...this.state, displayComplete: !this.state.displayComplete })
  }

  componentDidMount() {
    this.fetchTodos()
  };

  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos}
          displayComplete={this.state.displayComplete}
          toggler={this.toggler}
        />
        <Form 
          handleSubmit={this.handleSubmit}
          todoInput={this.state.todoInput}
          handleChange={this.handleChange}
          toggleComplete={this.toggleComplete}
          displayComplete={this.state.displayComplete}
        />
      </div>
    )
  }
}
