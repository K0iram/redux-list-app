import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.initData()
  }

  render() {

    if (this.props.loading === true) {
      return <h3>Loading..</h3>
    }

    return (
    <div>
      <h1>REACT WITH REDUX</h1>
      <ConnectedTodos/>
      <ConnectedGoals/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initData: () => dispatch(handleInitialData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)