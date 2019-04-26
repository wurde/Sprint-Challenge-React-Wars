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
    <div class="jsx-CharacterList">
      <div class="row justify-content-center">
        {props.starwarsChars.map(char => (<Character details={char} />))}
      </div>
    </div>
  )
}

/**
 * Export component
 */

module.exports = CharacterList
