import React from 'react'
import './Hashform.css'

function Hashform() {
  return (
    <div className='hashform'>
        <div className="input__section">
            <input type='text' placeholder='Enter your hash rate' className='hash__input hash'/>
            <select name='hashrate' className='hash__input rate'>
                <option>TH/s</option>
                <option>H/s</option>
                <option>KH/s</option>
                <option>MH/s</option>
                <option>GH/s</option>
            </select>

            <button>
                Calculate
            </button>
        </div>

        <p className='blue__text lil__bold'>ESTIMATED 24 HOUR REVENUE:</p>
        <h1>0.55 130 59 ETH <span className='blue__text'>($1275)</span></h1>
        <p className='grey__text'>Revenue will change based on mining difficulty and Ethereum price</p>
    </div>
  )
}

export default Hashform