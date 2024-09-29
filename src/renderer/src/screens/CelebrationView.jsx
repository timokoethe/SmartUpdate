import { useState } from 'react'
import ContinueButton from '../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function CelebrationView() {
  const navigate = useNavigate()
  return (
    <>
        <h1>CelebrationView</h1>
        <ContinueButton onClick={() => navigate('/FinalView')} />
    </>
  )
}

export default CelebrationView