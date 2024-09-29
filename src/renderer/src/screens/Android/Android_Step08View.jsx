import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function Android_Step08View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>Android_Step08View</h1>
        <ContinueButton onClick={() => navigate('/CelebrationView')} />
    </>
  )
}

export default Android_Step08View