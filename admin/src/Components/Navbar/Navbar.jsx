import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import nav_profile from '../../assets/nav_profile.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="nav-logo"></img>
      <p>Admin Panel</p>
       <img src={nav_profile} className="nav-profile" ></img>
    </div>
  )
}

export default Navbar