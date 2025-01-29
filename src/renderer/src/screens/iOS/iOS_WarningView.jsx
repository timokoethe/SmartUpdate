import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WifiWarning from '../../components/WifiWarning'
import inactivityTimer from '../../components/Timer'

function IOS_WarningView() {
  inactivityTimer()
  const navigate = useNavigate()
  return (
    <>
      <div className='fullBackgroundBlur'>
      <div className='wifiWarningView'>
        <WifiWarning onClick={() => navigate('/iOS_Step06View')} />
      </div>
      </div>

    </>
  )
}

export default IOS_WarningView