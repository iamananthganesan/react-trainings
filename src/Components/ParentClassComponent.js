import React, { Component } from 'react'
import ChildClassComponent from './ChildClassComponent'

class ParentClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: "Mahesh",
            role: "react developer"
        }
        //recommanded way to bind the event
        this.handleChangeRole = this.handleChangeRole.bind(this)
    }

    handleChangeRole() {
        this.setState({
            role: "Angular developer"
        }
        )
    }

    render() {
        return (
            <div>
                <h1>{this.props.greetingMessage} Am from class Component</h1>
                <button onClick={this.handleChangeRole}>change my role to angular developer</button>
                <ChildClassComponent name={this.state.name} role={this.state.role} />
            </div>
        )
    }
}

export default ParentClassComponent