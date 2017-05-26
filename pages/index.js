import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import {stylesheet} from 'todomvc-app-css/index.css'
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import makeStore from '../redux/store'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../redux/actions'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const App = ({todos, filter, actions}) => (
  <div className="todoapp">
    <Head><style dangerouslySetInnerHTML={{__html: stylesheet}} /></Head>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} filter={filter}/>
  </div>
)

App.getInitialProps = context => context.query

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  filter: [SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE].indexOf(ownProps.filter) >= 0
    ? ownProps.filter
    : SHOW_ALL
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default withRedux(
    makeStore,
    mapStateToProps,
    mapDispatchToProps
)(App)
