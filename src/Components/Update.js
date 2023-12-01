import React from 'react'
import { Link } from 'react-router-dom'

export default function Update() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <h2>Please show a Product from Product List to update.</h2>
      <br/>


      <Link to='/'>Click Here</Link>
    </div>
  )
}
