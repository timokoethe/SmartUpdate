import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'

function IOS_Step04View() {
  const navigate = useNavigate()
  return (
    <>
        <ProgressBar progress={7}/>
        <h1 className='headline'>2. Enable Automatic Update</h1>
        <CancelButton onClick={() => navigate('/')}/>
        <BackButton onClick={() => navigate('/IOS_Step03View')}/>
        <ContinueButton onClick={() => navigate('/IOS_Step05View')} />
    </>
  )
}

export default IOS_Step04View