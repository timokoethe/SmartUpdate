import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'

function IOS_Step01View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>iOS_Step01View</h1>
        <InfoButton />
        <CancelButton onClick={() => navigate('/')}/>
        <BackButton onClick={() => navigate('/PickerView')}/>
        <ContinueButton onClick={() => navigate('/IOS_Step02View')} />
    </>
  )
}

export default IOS_Step01View