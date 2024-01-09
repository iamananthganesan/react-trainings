import React, { useState } from 'react'

function MethodAsPropsChildren(props) {
console.log(props)
    const [data, setData] = useState({name:'magesh', role: "react developer"})
    const handleEventtoPassDatetoParent = () => {
        props.greetMsgHandler(data);
    }
    return (

        <div>
            <h2>Fire a event to know about magesh !!!!</h2>
            <button onClick={handleEventtoPassDatetoParent}>Pass data to parent Component</button>
        </div>
    )
}

export default MethodAsPropsChildren