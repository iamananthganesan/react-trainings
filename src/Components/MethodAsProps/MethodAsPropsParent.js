import React, { Component } from 'react'
import MethodAsPropsChildren from './MethodAsPropsChildren'

class MethodAsPropsParent extends Component {
    constructor() {
        super()
        this.state = {
            greetingMessage: "Welcome onboard"
        }

        this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler(childComponentData) {
        console.log("Data for magesh!! ", childComponentData)
    }
    render() {

        return (
            <div>                
                <MethodAsPropsChildren greetMsgHandler={this.eventHandler} />
            </div>
        )
    }
}

export default MethodAsPropsParent
