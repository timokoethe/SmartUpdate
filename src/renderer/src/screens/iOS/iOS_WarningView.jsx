import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function IOS_WarningView() {
  const navigate = useNavigate()
  return (
    <>
        <h1>iOS_WarningView</h1>
        <ContinueButton onClick={() => navigate('/IOS_Step06View')} />
    </>
  )
}

export default IOS_WarningView