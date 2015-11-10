import React, { Component } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component {

  render() {

    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            Todo Text
          </label>
          <button className="destroy" />
        </div>
      </li>
    )
  }
}

export default TodoItem
