import { useState } from 'react'
import ContinueButton from '../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'

function FinalView() {
  const navigate = useNavigate()
  return (
    <>
        <h1 className='headline'>Congratulations!</h1>
        <BackButton />
        <ContinueButton onClick={() => navigate('/')} />
    </>
  )
}

export default FinalView