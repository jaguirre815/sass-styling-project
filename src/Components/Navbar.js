import React from 'react'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className= "Links">
            <a href='/home'>Home</a>
            <a href='/profile' >Profile</a>
            <a href= '/contact'>Contact</a>
            <a href= '/about-us'>About us</a>
        </div>
    </div>
  )
}

export default Navbar