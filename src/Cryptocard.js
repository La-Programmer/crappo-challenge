import React from 'react'
import './Cryptocard.css'
import { useTransition, animated} from 'react-spring'
import { BsChevronRight} from 'react-icons/bs'
import useMediaQuery from 'use-mediaquery'

function Cryptocard({image, title, small, text, active}) {

  const transition = useTransition(active, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {
      duration: 0,
      tension: 100
    }
  })

  const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    background: '',
    color: '',
    margin: '2rem 2rem',
    borderRadius: '1.5rem',
    transition: 'background-color 0.5s'
  }

  const matches = useMediaQuery('(max-width:830px)')

  if (matches === true) {
    mainStyle.margin = '2rem 0.1rem'
  }

  active ? mainStyle.background = 'rgb(43, 7, 110)' : mainStyle.background = '#fff'
  active ? mainStyle.color = 'white' : mainStyle.color = 'black' 


  return (
    <div className='cryptocard' style={mainStyle}>
        <img src={image} alt="" className='card__image'/>
        <div className='title__sec'>
            <h2 className='card__title'>{title}</h2><span className='cardt__small'>{small}</span>
        </div>
        <p className='card__text'>
            {text}
        </p>
        <button className='no__bg'>
          {transition((style, active) => 
            active ? (
              <animated.div style={{...style,
                margin: '2rem 0rem',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                fontWeight: '500',
                background: '#3671E9',
                borderRadius: '5rem',
                border: 'none',
                padding: '1rem',
                color: 'white'
              }}>Start mining <BsChevronRight className='right__arrow no__bg'/>
              </animated.div>
            ) : (
              <animated.div style={{...style,
                margin: '2rem 0rem',
                width: '100%',
                background: 'white',
                border: '2px solid grey',
                borderRadius: '50%',
                color: '#3671E9'
              }}>
                <BsChevronRight className='right__arrow no__bg'/>
              </animated.div>
            )
          )}
        </button>
    </div>
  )
}

export default Cryptocard