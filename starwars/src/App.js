'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/index')

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
      <div class="jsx-App">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-3">
              <h1 class="Header">React Wars</h1>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <components.CharacterList starwarsChars={this.state.starwarsChars} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App
