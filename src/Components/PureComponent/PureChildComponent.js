import React, { PureComponent } from 'react'

export class PureChildComponent extends PureComponent {
    render() {
        console.log('pure name')
        const { name, counter } = this.props
        return (
            <div>
                <h3>Hey {name} am from PureComponent {counter}</h3>
            </div>
        )
    }
}

export default PureChildComponent
