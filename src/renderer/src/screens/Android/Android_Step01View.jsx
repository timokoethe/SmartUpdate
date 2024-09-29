import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function Android_Step01View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>Android_Step01View</h1>
        <ContinueButton onClick={() => navigate('/Android_Step02View')} />
    </>
  )
}

export default Android_Step01View