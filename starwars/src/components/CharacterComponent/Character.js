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
    <div class="jsx-Character col-2">
      <ul>
        <li><strong>Name:</strong> {props.details.name}</li>
        <li><strong>Birth year:</strong> {props.details.birth_year}</li>
        <li><strong>Gender:</strong> {props.details.gender}</li>
        <li><strong>Eye color:</strong> {props.details.eye_color}</li>
        <li><strong>Hair color:</strong> {props.details.hair_color}</li>
        <li><strong>Skin color:</strong> {props.details.skin_color}</li>
        <li><strong>Mass:</strong> {props.details.mass}</li>
      </ul>
    </div>
  )
}

/**
 * Export component
 */

module.exports = Character
