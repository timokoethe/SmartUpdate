import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WifiWarning from '../../components/WifiWarning'

function Android_WarningView() {
  const navigate = useNavigate()
  return (
    <>
      <div className='wifiWarningView'>
        <WifiWarning onClick={() => navigate('/Android_Step06View')} />
      </div>
    </>
  )
}

export default Android_WarningView