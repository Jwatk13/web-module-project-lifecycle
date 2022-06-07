import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form id="todoForm">
        <input type="text" placeholder='Type Todo...'></input>
        <input type="submit"></input>
        <button>Clear Completed!</button>
      </form>
    )
  }
}
