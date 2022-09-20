import React, { useState } from 'react'
import './Hero.css'
import { BsChevronRight} from 'react-icons/bs'
import useMediaQuery from 'use-mediaquery'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Hero({isVisible}) {

    useEffect(() => {
        AOS.init();
    }, [])

 return (
    <div className='hero'>
            <div className="hero__section">
                <div className="hero__section1 right">
                    <div className="black__friday" data-aos='fade-right' data-aos-duration='2000'>
                        <div className="save" data-aos='fade-right' data-aos-duration='3000'>
                            <p>75% SAVE</p>
                        </div>
                        <p>For the Black Friday weekend</p>
                    </div>
                    <h1 className='big__text' data-aos='fade-right' data-aos-duration='2000'>
                        Fastest & secure platform to invest in crypto
                    </h1>
                    <p className='small__text' data-aos='fade-right' data-aos-duration='2000'>
                        Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
                    </p>
                    <button data-aos='fade-up' data-aos-duration='2000'>
                        Try for FREE <BsChevronRight className='right__arrow'/>
                    </button>
                </div>

            

                <div className="hero__section2 left" data-aos='zoom-in' data-aos-duration='2000'>
                    <img className='hero__img' src={'/images/hero-img.png'} alt=''/>
                </div>
            </div>
    </div>
 )
}

export default Hero