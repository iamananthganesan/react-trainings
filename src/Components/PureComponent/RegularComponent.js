import React, { Component } from 'react'

export class RegularComponent extends Component {
  render() {
    const { name, counter } = this.props
    console.log('reg name')
    return (
      <div>
        <h3>Hey {name} ! Am regular component {counter}</h3>
      </div>
    )
  }
}

export default RegularComponent
