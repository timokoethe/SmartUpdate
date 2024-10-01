import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'

function Android_Step04View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>Android_Step04View</h1>
        <CancelButton onClick={() => navigate('/')}/>
        <BackButton onClick={() => navigate('/Android_Step03View')}/>
        <ContinueButton onClick={() => navigate('/Android_Step05View')} />
    </>
  )
}

export default Android_Step04View