import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'

function Android_Step07View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>Android_Step07View</h1>
        <InfoButton />
        <CancelButton onClick={() => navigate('/')}/>
        <BackButton onClick={() => navigate('/Android_Step06View')}/>
        <ContinueButton onClick={() => navigate('/Android_Step08View')} />
    </>
  )
}

export default Android_Step07View