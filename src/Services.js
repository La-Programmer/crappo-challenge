import React from 'react'
import './Services.css'
import useMediaQuery from 'use-mediaquery'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Services({title, text, image, reverse}) {

    const styles = {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        margin: '5rem 0rem',
        alignItems: 'initial'
    }

    const matches = useMediaQuery('(max-width: 830px)') 

    if (matches === true) {
        styles.flexDirection = 'column';
        styles.alignItems = 'center';
    }

    if (reverse === true) {
        styles.flexDirection = 'row-reverse';
    }

    if ((matches === true) && (reverse === true)) {
        styles.flexDirection = 'column';
        styles.alignItems = 'center';
    }

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <div className='services' style={styles}>
        <div className="services__info" data-aos='fade-right' data-aos-duration="2000">
            <h2>
                {title}
            </h2>

            <p>
                {text}
            </p>

            <button>
                Learn More
            </button>
        </div>
            <img src={image} alt="" data-aos='zoom-in' data-aos-duration="2000"/>
    </div>
  )
}

export default Services