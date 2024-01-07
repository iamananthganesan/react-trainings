import React, { useState } from "react"

const ChildFunctionalComponent = ({ names, role }) => {

    const [name, setName] = useState("Jayashree")

    const handleNameChange = () => {
        setName("Jayasree iyappan")
    }
    return (
        <div>
            <p>Hello Name from state = {name} {names}!!!am a {role}</p>
            <button onClick={handleNameChange}>update my name</button>
        </div>
    )
}

export default ChildFunctionalComponent