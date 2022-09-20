import React from 'react'
import Cryptocard from './Cryptocard'
import Footer from './Footer'
import Hashform from './Hashform'
import Header from './Header'
import Hero from './Hero'
import 'animate.css/animate.min.css'
import './Home.css'
import Reason from './Reason'
import Services from './Services'
import useMediaQuery from 'use-mediaquery'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'


function Home() {

    const [state1, setState1] = useState(true)
    const [state2, setState2] = useState(false)
    const [state3, setState3] = useState(false)

    const handleClick2 = () => (
        setState2(true), setState1(false), setState3(false)
        )

    const handleClick1 = () => (
        setState1(true), setState2(false), setState3(false)
    )

    const handleClick3 = () => (
        setState1(false), setState2(false), setState3(true)
    )



    let firstRib = <img src={'/images/hero-ribbon-1.png'} alt='' className='subtle__bg rib1'/>
    let secondRib = <img src={'/images/hero-ribbon-2.png'} alt='' className='subtle__bg rib2'/>
    let circle1 = <img src={'/images/features-circle-3.png'} alt='' className='subtle__bg feature__circle1' data-aos='zoom-in-down' data-aos-duration='2000'/>
    let mineBg = <img src={'/images/mine-bg.png'} className='mine__bg' alt='' data-aos='fade-down' data-aos-duration='2000'/>
    let whyRib = <img src={'/images/why-ribbon.png'} alt='' className='subtle__bg why__ribbon' data-aos='fade-right' data-aos-duration='2000'/>

    const tops = [<Header/>, <Sidebar />]

    let top

    const matches = useMediaQuery('(max-width: 830px)')

    if (matches === true) { 
        firstRib = null;
        secondRib = null;
        circle1 = null;
        mineBg = null;
        whyRib = null;
        top = tops[1];
    } else {
        top = tops[0];
    }

    useEffect(() => {
        AOS.init();
    }, [])


  return (
    <div className='home'>
        <div className="top__section">
        
                {top}
            
            
                <Hero />
            
            {firstRib}
            {secondRib}
            
            </div>

        <div className="why">
            <Reason/>
            <img src={'/images/why-model-1.png'} alt='' className='subtle__bg why__model1' data-aos='fade-right' data-aos-duration='1500'/>
            <img src={'/images/why-model-2.png'} alt='' className='subtle__bg why__model2' data-aos='fade-right' data-aos-duration='1500'/>
            {whyRib}
        </div>
        <div className="earnings">
            <div className="dark" data-aos='fade-right' data-aos-duration='1500' data-aos-offset='200'>
                <h1>
                    Check how much you can earn
                </h1>
                <p>
                    Let's check your hash rate to see how much you will earn today. Exercitation veniam consequat sunt nostrud amet
                </p>
            </div>
            <Hashform />
            <div className="light" data-aos='fade-up' data-aos-duration='1500' data-aos-offset='300'>
                <h1>
                    Trade Securely and Market the High Growth Cryptocurrencies.
                </h1>
                <div className="crypto__cards" data-aos='fade-up' data-aos-duration='1500' data-aos-offset='300'>
                    <button onClick={handleClick1}>
                        <Cryptocard title="Bitcoin" image='/images/bitcon.png' text='Digital currency in which a record of transactions is maintained.' small='BTC' active={state1}/>
                    </button>

                    <button onClick={handleClick2} >
                        <Cryptocard title='Ethereum' image='/images/ethereum.png' text='Blockchain texhnology to create and run decentralized applications.' small='ETH' active={state2}/>
                    </button>

                    <button onClick={handleClick3}>
                        <Cryptocard title='Litecoin' image='/images/litecoin.png' text='Cryptocurrency that enables instant payment to anyone in the world.' small='LTC' active={state3}/>
                    </button>
                </div>
            </div>
        </div>

        <div className="market">
            {circle1}
            <img src={'/images/features-circle-2.png'} alt='' className='subtle__bg feature__circle2'/>
            <h1 data-aos='fade-up' data-aos-duration='2000'>
                Market Sentiments, Portfolio and Run the Infrastructure of Your Choice
            </h1>
            <Services title='Invest Smart' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.' image='/images/feature-1-img.png'/>

            <Services reverse={true} title='Detailed Statistics' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.' image='/images/feature-2-img.png'/>

            <Services title='Grow your Profit and Track your Investments' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.' image='/images/feature-3-img.png'/>
        </div>

        <div className="mining">
            <div className="start" data-aos='zoom-in' data-aos-duration='2000'>
                <img src={'/images/ethereum-bg.png'} alt='' className='eth__image subtle__bg'/>
                <div className="start__text" data-aos='fade-right' data-aos-duration="2000">
                    <h1>
                        Start mining now
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.
                    </p>
                </div>
                <input type='text' placeholder='enter message' className='mining__input' data-aos='fade-right' data-aos-offset='100' data-aos-duration="2500"/>
                <button className='start__button' data-aos='fade-right' dats-aos-offset='100' data-aos-duration="2500">
                    Subscribe
                </button>
            </div>
                {mineBg}
        </div>

        <div className="home__bottom">
            <Footer />
        </div>
    </div>
  )
}

export default Home