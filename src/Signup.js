import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const Navigate = useNavigate();
    const handleAlreadymember =() =>{
    Navigate("/login");
  }
  return (
    <div>
        Signup
        <p>
            <input type = "text" placeholder = "Enter Name"></input>
        </p>
        <p>
            <input type = "text" placeholder = "Enter email"></input>
        </p>
        <p>
            <input type = "password" placeholder = "create password"></input>
        </p>
        <p>
            <input type = "phone-number" placeholder = "enter your number"></input>
        </p>
        <button>Signup</button>
        <hr></hr>
        <button onClick={handleAlreadymember}>Already a memeber? Login here</button>
    </div>
  )
}
