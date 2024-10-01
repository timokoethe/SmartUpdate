import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'

function IOS_Step05View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>iOS_Step05View</h1>
        <CancelButton />
        <BackButton />
        <ContinueButton onClick={() => navigate('/IOS_WarningView')} />
    </>
  )
}

export default IOS_Step05View