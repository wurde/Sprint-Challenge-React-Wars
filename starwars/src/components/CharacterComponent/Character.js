'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./Character.scss')

/**
 * Define component
 */

function Character(props) {
  return (
    <li class="jsx-Character">{props.details.name}</li>
  )
}

/**
 * Export component
 */

module.exports = Character
