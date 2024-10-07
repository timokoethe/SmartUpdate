import { useState } from 'react'
import ContinueButton from '../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function CelebViewiOS() {
  const navigate = useNavigate()
  return (
    <>
        <h1>CelebrationView</h1>
        <ContinueButton onClick={() => navigate('/FinalViewiOS')} />
    </>
  )
}

export default CelebViewiOS