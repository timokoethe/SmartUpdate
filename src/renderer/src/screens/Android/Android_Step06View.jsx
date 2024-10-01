import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'

function Android_Step06View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>Android_Step06View</h1>
        <InfoButton />
        <CancelButton />
        <BackButton />
        <ContinueButton onClick={() => navigate('/Android_Step07View')} />
    </>
  )
}

export default Android_Step06View