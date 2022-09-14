import React from 'react'
import './Hero.css'
import { BsChevronRight} from 'react-icons/bs'
import useMediaQuery from 'use-mediaquery'

function Hero() {
 return (
    <div className='hero'>
        <div className="hero__section">
                <div className="hero__section1 right">
                    <div className="black__friday">
                        <div className="save">
                            <p>75% SAVE</p>
                        </div>
                        <p>For the Black Friday weekend</p>
                    </div>
                    <h1 className='big__text'>
                        Fastest & secure platform to invest in crypto
                    </h1>
                    <p className='small__text'>
                        Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
                    </p>
                    <button>
                        Try for FREE <BsChevronRight className='right__arrow'/>
                    </button>
                </div>

                

                <div className="hero__section2 left">
                    <img className='hero__img' src={require('./images/hero-img.png')} alt=''/>
                </div>
            </div>
    </div>
  )
}

export default Hero