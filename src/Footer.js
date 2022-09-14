import React from 'react'
import './Footer.css'
import { FaRegCopyright } from 'react-icons/fa'
import { AiOutlineYoutube, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__container">
            <div className="logo__section">
                <img className='logo' src={require("./images/logo.jpg")} alt=''/>
                <p className='logo__text'>CRAPPO</p>
            </div>

            <div className="nav1">
                <h2>
                    Quick Links
                </h2>

                <nav>
                    <a href='#' className='navlink__footer'>Home</a>
                    <a href='#' className='navlink__footer'>Products</a>
                    <a href='#' className='navlink__footer'>About</a>
                    <a href='#' className='navlink__footer'>Feature</a>
                    <a href='#' className='navlink__footer'>Contact</a>
                </nav>
            </div>

            <div className="nav2">
                <h2>
                    Resources Links
                </h2>

                <nav>
                    <a href='#' className='navlink__footer'>Download Whitepaper</a>
                    <a href='#' className='navlink__footer'>Smart Token</a>
                    <a href='#' className='navlink__footer'>Blockchain Explore</a>
                    <a href='#' className='navlink__footer'>Crypto API</a>
                    <a href='#' className='navlink__footer'>Interest</a>
                </nav>
            </div>

            <div className="payments">
                <h2>
                    We accept the following payment systems
                </h2>

                <img src={require('./images/visa.png')} alt=''/>
                <img src={require('./images/mastercard.png')} alt=''/>
                <img src={require('./images/bitcoin-1.png')} alt=''/>
            </div>
        </div>
        <div className="footer__bottom">
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