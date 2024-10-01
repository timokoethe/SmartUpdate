import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'

function Android_Step05View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>Android_Step05View</h1>
        <CancelButton onClick={() => navigate('/')}/>
        <BackButton onClick={() => navigate('/Android_Step04View')}/>
        <ContinueButton onClick={() => navigate('/Android_WarningView')} />
    </>
  )
}

export default Android_Step05View