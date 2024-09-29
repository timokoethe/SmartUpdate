import { useState } from 'react'
import ContinueButton from '../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function SolutionView() {
  const navigate = useNavigate()
  return (
    <>
        <h1>SolutionView</h1>
        <ContinueButton onClick={() => navigate('/PickerView')} />
    </>
  )
}

export default SolutionView