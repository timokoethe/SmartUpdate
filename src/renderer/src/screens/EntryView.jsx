import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../components/InfoButton'
import InfoWidget from '../components/InfoWidget'
import StartButton from '../components/StartButton'
import LanguageToggle from '../components/LanguageToggle'

function EntryView() {
  const navigate = useNavigate()
  return (
    <>
      <div className='spacer mt-100'>
        <InfoButton />
        <LanguageToggle />
      </div>

      
      <InfoWidget widgetNumber={1} />
      <StartButton onClick={() => navigate('/InfoView')} />

    </>
  )
}

export default EntryView