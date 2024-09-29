import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function Android_Step02View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>Android_Step02View</h1>
        <ContinueButton onClick={() => navigate('/Android_Step03View')} />
    </>
  )
}

export default Android_Step02View