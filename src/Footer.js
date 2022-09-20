import React from 'react'
import './Footer.css'
import { FaRegCopyright } from 'react-icons/fa'
import { AiOutlineYoutube, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__container">
            <div className="logo__section" data-aos='fade-right' data-aos-duration='2000'>
                <img className='logo' src={"/images/logo.jpg"} alt=''/>
                <p className='logo__text'>CRAPPO</p>
            </div>

            <div className="nav1" data-aos='fade-up' data-aos-duration="2000">
                <h2>
                    Quick Links
                </h2>

                <nav data-aos='fade-up' data-aos-duration="2500">
                    <a href='#' className='navlink__footer'>Home</a>
                    <a href='#' className='navlink__footer'>Products</a>
                    <a href='#' className='navlink__footer'>About</a>
                    <a href='#' className='navlink__footer'>Feature</a>
                    <a href='#' className='navlink__footer'>Contact</a>
                </nav>
            </div>

            <div className="nav2" data-aos='fade-up' data-aos-duration="2000">
                <h2>
                    Resources Links
                </h2>

                <nav data-aos='fade-up' data-aos-duration="2500">
                    <a href='#' className='navlink__footer'>Download Whitepaper</a>
                    <a href='#' className='navlink__footer'>Smart Token</a>
                    <a href='#' className='navlink__footer'>Blockchain Explore</a>
                    <a href='#' className='navlink__footer'>Crypto API</a>
                    <a href='#' className='navlink__footer'>Interest</a>
                </nav>
            </div>

            <div className="payments" data-aos='fade-up' data-aos-duration="2000">
                <h2>
                    We accept the following payment systems
                </h2>

                <img src={'/images/visa.png'} alt='' data-aos='fade-left' data-aos-duration="2500"/>
                <img src={'/images/mastercard.png'} alt='' data-aos='fade-left' data-aos-duration="3000"/>
                <img src={'/images/bitcoin-1.png'} alt=''data-aos='fade-left' data-aos-duration="3000"/>
            </div>
        </div>
        <div className="footer__bottom" data-aos='zoom-in' data-aos-duration="2000">
            <p><FaRegCopyright />2022 CRAPPO CLONE. All rights reserved.</p>

            <div className="sm__links ">
                <AiOutlineYoutube className='navlink__footer'/>
                <AiOutlineWhatsApp className='navlink__footer'/>
                <AiOutlineInstagram className='navlink__footer'/>
                <AiOutlineTwitter className='navlink__footer'/>
                <AiOutlineLinkedin className='navlink__footer'/>
            </div>
        </div>
    </div>
  )
}

export default Footer