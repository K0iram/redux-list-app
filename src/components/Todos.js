import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from '../actions/todos'

class Todos extends Component {
  addItem = (e) => {
    e.preventDefault()
    this.props.onAddtodo(
      this.input.value,
      () => {
        this.input.value = ''
      }
    )
  }

  removeItem = (todo) => {
    this.props.onDelete(todo)
  }

  toggleTodo = (id) => {
    this.props.onToggle(id)
  }

  render() {
    return (
      <div>
        <h1>React Todos</h1>
        <input
          type="text"
          placeholder='Add Todo'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Submit</button>

        <List toggle={this.toggleTodo} remove={this.removeItem} list={this.props.todos}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddtodo: (val, cb) => dispatch(handleAddTodo(val,cb)),
    onDelete: (todo) => dispatch(handleDeleteTodo(todo)),
    onToggle: (id) => dispatch(handleToggle(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos)