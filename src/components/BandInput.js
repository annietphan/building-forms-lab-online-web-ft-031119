// Add BandInput component
import React, { Component } from 'react'



class BandInput extends Component {
  state = {
    name: ''
  }

handleOnChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleOnSubmit = e => {
  e.preventDefault()
  this.props.addBand(this.state)
  this.setState({
    name: ''
  })
}

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Name: </label>
          <input type="text" onChange={this.handleOnChange} value={this.state.name} name="name"/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
