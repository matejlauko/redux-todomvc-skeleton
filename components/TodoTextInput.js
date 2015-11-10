import React, { Component } from 'react'
import classnames from 'classnames'

class TodoTextInput extends Component {

  render() {
    return (
      <input
        className="new-todo"
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
      />
    )
  }
}

export default TodoTextInput
