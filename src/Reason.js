import React from 'react'
import Icons from './Icons'
import './Reason.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Reason() {

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <div className='reason'>
        <div className="reason__top">
            <Icons icon='/images/icon1.png' title='$30B' text='Digital Currency Exchange'/>
            <Icons icon='/images/icon2.png' title='190+' text='Countries around the World'/>
            <Icons icon='/images/icon3.png' title='$10M' text='Trusted Wallet Investors'/>
        </div>

        <div className="reason__content">
            <img src={'/images/why-img.png'} alt='' data-aos='zoom-in' data-aos-duration='2000'/>
            <div className="text" data-aos='fade-right' data-aos-duration='2000'>
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