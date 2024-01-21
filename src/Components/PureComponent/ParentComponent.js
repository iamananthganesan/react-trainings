import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureChildComponent from './PureChildComponent'

export class ParentComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: 'jayashri',
            counter: 0
        }
    }

    changeName = () => {
        this.intervalMethod()
    }

    intervalMethod = () => {
        setInterval(() => {
            this.setState({
                name: 'jayashree',
                counter: this.state.counter + 1
            })
        }, 1000)

    }

    render() {
        return (
            <div>
                <h1>Hey {this.state.name} whats up?</h1>
                <button onClick={this.changeName}>Change Name</button>
                <RegularComponent name={this.state.name} counter={this.state.counter} />
                <PureChildComponent name={this.state.name} counter={this.state.counter} />
            </div>
        )
    }
}

export default ParentComponent
