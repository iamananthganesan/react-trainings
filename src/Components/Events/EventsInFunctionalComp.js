import React, { useState } from "react"
const EventsInFunctionalComp = () => {
    const [name, setName] = useState('Magesh');
    const [userName, setuserName] = useState('');
    const handleNameChange = () => {
        setName('Magesh AnandKumar')
    }
    const handleUserName = (event) =>{
        setuserName(event.target.value)        
    }

    return (
        <div>
            <h2>Hello {name}!!!</h2>
            <button onClick={handleNameChange}>Change my name</button>
            =============
            <input type="text" placeholder="Enter your username" onChange={handleUserName} />
            <h2>Hello {userName}!!!</h2>
        </div>
    )
}

export default EventsInFunctionalComp