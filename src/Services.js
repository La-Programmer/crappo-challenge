import React from 'react'
import './Services.css'
import useMediaQuery from 'use-mediaquery'

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

  return (
    <div className='services' style={styles}>
        <div className="services__info">
            <h2>
                Invest Smart
            </h2>

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.
            </p>

            <button>
                Learn More
            </button>
        </div>
        <div className="services__image">
            <img src={require('./images/feature-1-img.png')} alt=""/>
        </div>
    </div>
  )
}

export default Services