import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddGoal,
  handleDeleteGoal
} from '../actions/goals'

class Goals extends Component {
  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddGoal(
      this.input.value,
      () => {
        this.input.value = ''
      }
    ))
  }

  removeItem = (goal) => {
    this.props.onDelete(goal)
  }

  render() {
    return (
      <div>
        <h1>React Goals</h1>
        <input
          type="text"
          placeholder='Add Goal'
          ref={(input) => this.input = input}
        />

        <button onClick={this.addItem}>Submit</button>

        <List remove={this.removeItem} list={this.props.goals}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    goals: state.goals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (goal) => dispatch(handleDeleteGoal(goal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Goals)