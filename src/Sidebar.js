import React from 'react'
import './Sidebar.css'
import { bubble as Menu} from 'react-burger-menu'

function Sidebar() {
  return (
    <Menu className='sidebar'>
        <a href='#' className='navlink__sidebar'>Home</a>
        <a href='#' className='navlink__sidebar'>Products</a>
        <a href='#' className='navlink__sidebar'>About</a>
        <a href='#' className='navlink__sidebar'>Feature</a>
        <a href='#' className='navlink__sidebar'>Contact</a>
        <div className="user__log">
            <a href='#' className='navlink__sidebar'>Login</a>
            <a href='#' className='navlink__sidebar active'>Register</a>
        </div>
    </Menu>
  )
}

export default Sidebar