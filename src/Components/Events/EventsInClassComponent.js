import React, { Component } from 'react';

class EventsInClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            country: 'India'
        }
        // Approach 1 which is recommmanded way to bind the this for event handler
        this.handleCountryChange = this.handleCountryChange.bind(this)
    }

    //Event Handler
    handleCountryChange() {
        this.setState({
            country: 'USA'
        })
    }
    render() {
        return (
            <div>
                <h1>Hello {this.state.country}</h1>
                {/* Approach 1 = define the event name in constructor level*/}
                <button onClick={this.handleCountryChange}>Change your country</button>

                {/* Approach  2 = binding this next to the event handler
                <button onClick={this.handleCountryChange.bind(this)}>Change your country</button> */}

                {/* Approach 3
                calling the event handler method from arrow function 
                <button onClick={() => { this.handleCountryChange() }}>Change your country</button>*/}
            </div>
        )
    }
}

export default EventsInClassComponent;