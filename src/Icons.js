import React from 'react'
import './Icons.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Icons({icon, title, text}) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='icons'>
        <img src={icon} alt='' data-aos='fade-up' data-aos-duration='2000'/>
        <div className="text" data-aos='fade-up' data-aos-duration='3000'>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Icons