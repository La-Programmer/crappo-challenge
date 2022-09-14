import React from 'react'
import Cryptocard from './Cryptocard'
import Footer from './Footer'
import Hashform from './Hashform'
import Header from './Header'
import Hero from './Hero'
// import { NavLink } from 'react-router-dom'
import './Home.css'
import Reason from './Reason'
import Services from './Services'
import useMediaQuery from 'use-mediaquery'
import Sidebar from './Sidebar'
import { useTransition, animated} from 'react-spring'

function Home() {

    let firstRib = <img src={require('./images/hero-ribbon-1.png')} alt='' className='subtle__bg rib1'/>
    let secondRib = <img src={require('./images/hero-ribbon-2.png')} alt='' className='subtle__bg rib2'/>
    let circle1 = <img src={require('./images/features-circle-3.png')} alt='' className='subtle__bg feature__circle1'/>
    let mineBg = <img src={require('./images/mine-bg.png')} className='mine__bg' alt=''/>
    let whyRib = <img src={require('./images/why-ribbon.png')} alt='' className='subtle__bg why__ribbon'/>

    const tops = [<Header />, <Sidebar />]

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

    const transitions = useTransition({
        from: { scale: '0', y: '-5'},
        enter: { scale: '1', y: '0'},
        leave: { scale: '0'},
        config: { duration: '0.5s', friction: '100', tension: '10'}
    })


  return (
    <div className='home'>
        <animated.div className="top__section">
            
            {top}

            <Hero />

            {firstRib}
            {secondRib}
            
        </animated.div>

        <div className="why">
            <Reason />
            <img src={require('./images/why-model-1.png')} alt='' className='subtle__bg why__model1'/>
            <img src={require('./images/why-model-2.png')} alt='' className='subtle__bg why__model2'/>
            {whyRib}
        </div>
        <div className="earnings">
            <div className="dark">
                <h1>
                    Check how much you can earn
                </h1>
                <p>
                    Let's check your hash rate to see how much you will earn today. Exercitation veniam consequat sunt nostrud amet
                </p>
            </div>
            <Hashform />
            <div className="light">
                <h1>
                    Trade Securely and Market the High Growth Cryptocurrencies.
                </h1>
                <div className="crypto__cards">
                    <Cryptocard />

                    <Cryptocard />

                    <Cryptocard />
                </div>
            </div>
        </div>

        <div className="market">
            {circle1}
            <img src={require('./images/features-circle-2.png')} alt='' className='subtle__bg feature__circle2'/>
            <h1>
                Market Sentiments, Portfolio and Run the Infrastructure of Your Choice
            </h1>
            <Services />

            <Services reverse={true}/>

            <Services />
        </div>

        <div className="mining">
            <div className="start">
                <img src={require('./images/ethereum-bg.png')} alt='' className='eth__image subtle__bg'/>
                <div className="start__text">
                    <h1>
                        Start mining now
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.
                    </p>
                </div>
                <input type='text' placeholder='enter message' className='mining__input'/>
                <button className='start__button'>
                    Subscribe
                </button>
                <img src={require('./images/bitcoin-bg.png')} alt='' className='btc__image subtle__bg'/>
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