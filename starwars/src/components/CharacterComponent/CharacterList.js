'use strict'

/**
 * Dependencies
 */

const React = require('react')
const Character = require('./Character')

/**
 * Import component styles
 */

require('./CharacterList.scss')

/**
 * Define component
 */

function CharacterList(props) {
  return (
    <ul class="jsx-CharacterList">
      {props.starwarsChars.map(char => (<Character details={char} />))}
    </ul>
  )
}

/**
 * Export component
 */

module.exports = CharacterList
