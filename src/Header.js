import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
                <div className="logo__section">
                    <img className='logo' src={require("./images/logo.jpg")} alt=''/>
                    <p className='logo__text'>CRAPPO</p>
                </div>
                
                <nav className="nav">
                    <a href='#'>Products</a>
                    <a href='#'>Features</a>
                    <a href='#'>About</a> 
                    <a href='#'>Contact</a>
                    <a href=''>Login</a>
                    <div className='border__me'/>
                    <a href='' className='active'>Register</a>
                </nav>
    </div>
  )
}

export default Header