import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'

function IOS_Step08View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>iOS_Step08View</h1>
        <InfoButton />
        <CancelButton />
        <BackButton />
        <ContinueButton onClick={() => navigate('/CelebrationView')} />
    </>
  )
}

export default IOS_Step08View