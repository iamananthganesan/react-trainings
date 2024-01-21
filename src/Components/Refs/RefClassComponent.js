import React, { Component, createRef } from 'react'

class RefClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Jayashri'
        }

        this.inputRef = createRef()
    }

    // componentDidMount(){
    //     this.inputRef.current.focus()
    // }

    handleFocusInputField = () =>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} value={this.state.name} />
        <button onClick={this.handleFocusInputField}>Focus on name field</button>
      </div>
    )
  }
}

export default RefClassComponent