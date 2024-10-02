import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../components/InfoButton'
import InfoWidget from '../components/InfoWidget'
import StartButton from '../components/StartButton'

function EntryView() {
  const navigate = useNavigate()
  return (
    <>
        <InfoButton />
        <StartButton onClick={() => navigate('/InfoView')} />
        <InfoWidget widgetNumber={1} />
    </>
  )
}

export default EntryView