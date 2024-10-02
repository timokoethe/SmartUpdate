import { useState } from 'react'
import ContinueButton from '../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'

function InfoView() {
  const navigate = useNavigate()
  return (
    <>
        <ProgressBar progress={1}/>
        <h1 className='headline'>Why are Software Updates so important?</h1>
        <ContinueButton onClick={() => navigate('/SolutionView')} />
    </>
  )
}

export default InfoView