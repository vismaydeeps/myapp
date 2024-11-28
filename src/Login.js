import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const Navigate = useNavigate();
  const handleSignup =() =>{
      Navigate("/signup");
  }
  
  return (
    <div> 
        <p>
            <input type = "text" placeholder = "Enter email"></input>
        </p>
        <p>
            <input type = "password" placeholder = "Enter password"></input>
        </p>
        <button>Login</button>
        <hr></hr>
        <button onClick={handleSignup}>Create Account</button>
    </div>
  )
}
