import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'

function IOS_Step03View() {
  const navigate = useNavigate()
  return (
    <>
        <ProgressBar progress={6}/>
        <h1 className='headline'>1. Find the Update Settings</h1>
        <InfoButton />
        <CancelButton onClick={() => navigate('/')}/>
        <BackButton onClick={() => navigate('/IOS_Step02View')}/>
        <ContinueButton onClick={() => navigate('/IOS_Step04View')} />
    </>
  )
}

export default IOS_Step03View