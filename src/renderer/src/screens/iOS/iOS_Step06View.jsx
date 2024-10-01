import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'

function IOS_Step06View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>iOS_Step06View</h1>
        <InfoButton />
        <CancelButton onClick={() => navigate('/')}/>
        <BackButton onClick={() => navigate('/IOS_Step05View')}/>
        <ContinueButton onClick={() => navigate('/IOS_Step07View')} />
    </>
  )
}

export default IOS_Step06View