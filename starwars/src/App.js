'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Constants
 */

const Component = React.Component

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */


class App extends Component {
  constructor() {
    super()
    this.state = {
      starwarsChars: []
    }
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/')
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({ starwarsChars: data.results })
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  render() {
    return (
      <div className="jsx-App">
        <h1 className="Header">React Wars</h1>
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App
