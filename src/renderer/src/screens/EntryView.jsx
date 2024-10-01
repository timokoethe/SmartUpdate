import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../components/InfoButton'
import ContinueButton from '../components/ContinueButton'
import InfoWidget from '../components/InfoWidget'

function EntryView() {
  const navigate = useNavigate()
  return (
    <>
        <h1>EntryView</h1>
        <InfoButton />
        <ContinueButton onClick={() => navigate('/InfoView')} />
        <InfoWidget />
    </>
  )
}

export default EntryView