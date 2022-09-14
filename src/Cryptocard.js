import React from 'react'
import './Cryptocard.css'
import { BsChevronRight} from 'react-icons/bs'

function Cryptocard({image, title, text}) {
  return (
    <div className='cryptocard'>
        <img src={require('./images/bitcon.png')} alt="" className='card__image'/>
        <div className='title__sec'>
            <h2 className='card__title'>Bitcoin</h2><span className='cardt__small'>BTC</span>
        </div>
        <p className='card__text'>
            Digital currency in which a record of transactions is maintained.
        </p>
        <button>
            Start mining <BsChevronRight className='right__arrow no__bg font6'/>
        </button>
    </div>
  )
}

export default Cryptocard