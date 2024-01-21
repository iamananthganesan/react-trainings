import React, { useState } from 'react'
import MemoFunctionalComponent from './MemoFunctionalComponent'

const ParentFunctionalComponent = () => {
    const [name, setName] = useState('Magesh')
    return (
        <div>
            <h3>Parent component</h3>
            <button onClick={() => { console.log('parent comp');setName('Magesh Kumar') }}>Change Name</button>

            <button onClick={() => { console.log('2nd call comp');setName('Magesh K anand') }}>Change Name</button>
            <MemoFunctionalComponent name={name} />
        </div>
    )
}

export default ParentFunctionalComponent