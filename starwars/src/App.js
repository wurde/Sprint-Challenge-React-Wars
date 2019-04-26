'use strict'

/**
 * Dependencies
 */

const url = require('url')
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
      starwarsChars: [],
      nextLink: null
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
        console.log(data)
        this.setState({
          starwarsChars: data.results,
          nextLink: data.next
        })
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  nextHandler = () => {
    this.getCharacters(this.state.nextLink)
  }

  render() {
    return (
      <div className="jsx-App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-3">
              <h1 className="Header">React Wars</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <components.CharacterList starwarsChars={this.state.starwarsChars} />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <button className="Button" onClick={this.nextHandler}>Next</button>
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
