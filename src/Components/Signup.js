import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/Signup.css'

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  },[])

  
  const submitData = async () => {
    let result = await fetch('http://localhost:5500/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result)
    if(result.name!=='' && result.eamil!=='' && result.password!==''){
      localStorage.setItem("user", JSON.stringify(result))
      navigate('/')
      window.location.reload(true)
    
    }
    
  }

  return (
    <div className='sign'>
      <h1> Register</h1>

      <div className='signup'>
        <div className='inputField'>
          <label> Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className='inputField'>
          <label> Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='inputField'>
          <label> Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div className='btn'>
          <button className='submitBtn' type='button' onClick={submitData}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
