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
    <div className="jsx-CharacterList">
      <div className="row justify-content-center">
        {props.starwarsChars.map((char, i) => (<Character key={i} details={char} />))}
      </div>
    </div>
  )
}

/**
 * Export component
 */

module.exports = CharacterList
