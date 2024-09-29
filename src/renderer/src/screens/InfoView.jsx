import { useState } from 'react'
import ContinueButton from '../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function InfoView() {
  const navigate = useNavigate()
  return (
    <>
        <h1>InfoView</h1>
        <ContinueButton onClick={() => navigate('/SolutionView')} />
    </>
  )
}

export default InfoView