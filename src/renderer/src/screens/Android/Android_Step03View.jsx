import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'

function Android_Step03View() {
  const navigate = useNavigate()
  return (
    <>
        <ProgressBar progress={6}/>
        <h1 className='headline'>1. Find the Update Settings</h1>
        <InfoButton />
        <CancelButton onClick={() => navigate('/')}/>
        <BackButton onClick={() => navigate('/Android_Step02View')}/>
        <ContinueButton onClick={() => navigate('/Android_Step04View')} />
    </>
  )
}

export default Android_Step03View