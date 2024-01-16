import React, { Component } from "react";

class ConditionalRendering extends Component {
    constructor() {
        super()
        this.state = {
            user: "Madgesh"
        }
    }
    render() {
        // let user
        // if (this.state.user === 'Magesh') {
        //     user = <h3>Hello {this.state.user}</h3>
        // } else {
        //     user = <h3>Hello Guest</h3>
        // }
        return (
            <div>
                { 
                    (this.state.user === "Magesh") ? <h3>Hello {this.state.user}</h3> : <h3>Hello Guest</h3>                    
                }
            </div>
        )
    }
}

export default ConditionalRendering