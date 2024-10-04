import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WifiWarning from '../../components/WifiWarning'

function IOS_WarningView() {
  const navigate = useNavigate()
  return (
    <>
      <div className='wifiWarningView'>
        <WifiWarning onClick={() => navigate('/iOS_Step06View')} />
      </div>
    </>
  )
}

export default IOS_WarningView