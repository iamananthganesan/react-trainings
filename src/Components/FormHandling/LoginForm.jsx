import { useState } from "react"
import './LoginForm.css';

const LoginForm = () =>{

    // const [loginDetails, setLoginDetails] = useState(
    //     {
    //         email: '',
    //         password: '',
    //         terms
    //     }
    // )
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [terms,setTerms] = useState(false)

    const handleUserEmail = (event) =>{
        setEmail(event.target.value)
    }

    const handleUserPassword = (event) =>{
        setPassword(event.target.value)
    }

    const handleUserTerms = (event) =>{
        //console.log(event.target)
        setTerms(event.target.checked)
    }


    const handleLoginForm = (event) =>{
        event.preventDefault();

        const userDetails = {
            email: email,
            password: password,
            terms: terms
        }
        console.log("userDetails", userDetails);
    }
    return(
        <div className="loginPage">
            <form onSubmit={handleLoginForm}>
                <div className="form-control">
                    <label htmlFor="useremail">Email</label>
                    <input onChange={handleUserEmail} type="text" required placeholder="Enter your email address" value={email} id="useremail" />
                </div>
                <div className="form-control">
                    <label htmlFor="userpassword">Password</label>
                    <input onChange={handleUserPassword} type="password" required placeholder="Enter your password" value={password} id="userpassword"/>
                </div>
                <div className="form-control">                    
                    <input onClick={handleUserTerms} type="checkbox" checked={terms} value={terms} id="useracceptsterms"/>
                    <label htmlFor="useracceptsterms">I have read the teams and conditions</label>
                </div>
                <div className="form-control">
                    <button className="login-button" disabled={!terms} type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}


export default LoginForm