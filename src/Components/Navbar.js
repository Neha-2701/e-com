import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styling/Navbar.css'

export default function Navbar() {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
    window.location.reload(true)
  }

  return (
    <div className='nav'>
      {
        auth ?
        
          <ul className='list'>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/add'>Add </Link></li>
            <li><Link to='/update'>Update</Link></li>
            <li><Link to='/logout' onClick={logout}>Logout<sub> ({(JSON.parse(auth)).name})</sub></Link></li>
        
          </ul>
          
          :
          <ul className='list loginList'>
            <li><Link to='/login'>Login</Link></li>
            <li> <Link to='/signup'>SignUp</Link></li>
          </ul>
      }
    </div>
  )
}

