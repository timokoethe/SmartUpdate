import { useState } from 'react'
import ContinueButton from './ContinueButton'
import CheckIcon from '../assets/icons/TickIcon.png'

function WifiWarning({ onClick }) {
  return (
    <div className='wifiWarning'>
      <div className='wifiWarningContentContainer'>
      <img src={CheckIcon} className='wifiWarningIcon' />
        <p className='text'>From now on, your mobile phone will try to install updates 
            on its own as soon as it is connected to WI-FI.</p>
      </div>
      <div className='wifiWarningButtonContainer my-50 mt-100'>
        <ContinueButton onClick={onClick}/>
      </div>

    </div>
  )
}

export default WifiWarning