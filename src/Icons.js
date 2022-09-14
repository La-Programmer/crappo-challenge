import React from 'react'
import './Icons.css'

function Icons({icon, title, text}) {
  return (
    <div className='icons'>
        <img src={require('./images/icon1.png')} alt=''/>
        <div className="text">
            <h1>$30B</h1>
            <p>Digital Currency Exchanged</p>
        </div>
    </div>
  )
}

export default Icons