import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import {stylesheet} from 'todomvc-app-css/index.css'
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import makeStore from '../store'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

const App = ({todos, filter, actions}) => (
  <div className="todoapp">
    <Head><style dangerouslySetInnerHTML={{__html: stylesheet}} /></Head>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} filter={filter}/>
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default withRedux(
    makeStore,
    mapStateToProps,
    mapDispatchToProps
)(App)
