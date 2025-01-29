import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WifiWarning from '../../components/WifiWarning'
import inactivityTimer from '../../components/Timer'

function Android_WarningView() {
  inactivityTimer()
  const navigate = useNavigate()
  return (
    <>
      <div className='fullBackgroundBlur'>
      <div className='wifiWarningView'>
        <WifiWarning onClick={() => navigate('/Android_Step06View')} />
      </div>
      </div>
    </>
  )
}

export default Android_WarningView