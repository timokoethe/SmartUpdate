import { useState } from 'react'
import ContinueButton from '../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function FinalView() {
  const navigate = useNavigate()
  return (
    <>
        <h1>FinalView</h1>
        <ContinueButton onClick={() => navigate('/')} />
    </>
  )
}

export default FinalView