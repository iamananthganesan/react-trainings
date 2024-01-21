import React, { Component } from "react";

class LifeCycleComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Jack'
        }
        console.log('in constructor')
    }
    componentDidMount() {
        console.log('in componentDidMount api GET calls ')
    }


    componentDidUpdate(){
        console.log('in component did update')
    }

    componentWillUnmount(){
        console.log('in component will unmount')
    }
    handleChangeName = () =>{
        this.setState({
                name: 'Jack Ryan'
            })
    }
    render() {
        console.log('in render')
        return (
            <div>
                <h3>{this.state.name}</h3>
                <button onClick={this.handleChangeName}>Change my name </button>
            </div>
        )
    }
}

export default LifeCycleComponent