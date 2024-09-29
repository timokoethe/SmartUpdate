import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function Android_WarningView() {
  const navigate = useNavigate()
  return (
    <>
        <h1>Android_WarningView</h1>
        <ContinueButton onClick={() => navigate('/Android_Step06View')} />
    </>
  )
}

export default Android_WarningView