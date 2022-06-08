import React from 'react'

export default class Form extends React.Component {

  render() {
    return (
      <>
        <form 
          onSubmit={this.props.handleSubmit} id="todoForm">
          <input
            value={this.props.todoInput}
            onChange={this.props.handleChange} 
            type="text" 
            placeholder='Type Todo...'>
          </input>
          <input 
            type="submit">
          </input>
        </form>
        <button 
          onClick={this.props.toggleComplete}>
          {this.props.displayComplete ? 'Hide' : 'Show'} Completed!
        </button>
      </>
    ) 
  }
}
