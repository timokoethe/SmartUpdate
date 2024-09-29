import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContinueButton from '../components/ContinueButton'

function EntryView() {
  const navigate = useNavigate()
  return (
    <>
        <h1>EntryView</h1>
        <ContinueButton onClick={() => navigate('/InfoView')} />
    </>
  )
}

export default EntryView