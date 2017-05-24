import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

function renderTodoCount(activeCount) {
  const itemWord = activeCount === 1 ? 'item' : 'items'

  return (
    <span className="todo-count">
      <strong>{activeCount || 'No'}</strong> {itemWord} left
    </span>
  )
}

function renderFilterLink({ filter, selectedFilter, onShow }) {
  return (
    <a className={classnames({ selected: filter === selectedFilter })}
        style={{ cursor: 'pointer' }}
        onClick={() => onShow(filter)}>
      {FILTER_TITLES[filter]}
    </a>
  )
}

function renderClearButton({ completedCount, onClearCompleted}) {
  if (completedCount > 0) {
    return (
      <button
        className="clear-completed"
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    )
  }
}

function Footer(props) {
  return (
    <footer className="footer">
      {renderTodoCount(props.activeCount)}
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filter =>
          <li key={filter}>
            {renderFilterLink({ filter, selectedFilter: props.filter, onShow: props.onShow })}
          </li>
        )}
      </ul>
      {renderClearButton({ onClearCompleted: props.onClearCompleted, completedCount: props.completedCount })}
    </footer>
  )
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
}

export default Footer
