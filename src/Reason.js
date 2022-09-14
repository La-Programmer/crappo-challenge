import React from 'react'
import Icons from './Icons'
import './Reason.css'

function Reason() {
  return (
    <div className='reason'>
        <div className="reason__top">
            <Icons />
            <Icons />
            <Icons />
        </div>

        <div className="reason__content">
            <img src={require('./images/why-img.png')} alt=''/>
            <div className="text">
                <h1>Why you should choose CRAPPO</h1>
                <p>
                    Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
                </p>

                <button>
                    Learn More
                </button>
            </div>
        </div>
    </div>
  )
}

export default Reason