import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/Login.css'

export default function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  },[])

  const handleLogin=async()=>{
    let result = await fetch('http://localhost:5500/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers :{
            'Content-Type' :'application/json'
        }
    })
    result=await result.json();
    if(result.name){
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/')
    }else{
        alert("Enter correct details")
    }  
  }


  return (
    <div className='loginContainer'>
       <h1>Login</h1>
    <div className='login'>
      <div className='inputField'>
          <label> Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='inputField'>
          <label> Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div className='btn'>
          <button className='submitBtn' type='button' onClick={handleLogin}>Login</button>
        </div>
      </div>
      </div>
    
  )
}
