import React, {Component} from 'react';

class ChildClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            address: 'chennai, Tn, India'
        }
    }

    render() {
        const userDetails = this.props 
        return (
            <div>Hello {userDetails.name}!!!! am a {userDetails.role} from {this.state.address}</div>
        )
    }
}

export default ChildClassComponent;