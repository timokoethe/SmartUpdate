import { useState } from 'react'
import StartButton from '../components/StartButton'
import ProgressBar from '../components/ProgressBar'
import ContinueButton from '../components/ContinueButton'
import BackButton from '../components/BackButton'
import CancelButton from '../components/CancelButton'
import InfoButton from '../components/InfoButton'
import LanguageToggle from '../components/LanguageToggle'

function EntryView() {
  return (
    <>
        <ProgressBar progress={9}/>
        <StartButton />
        <ContinueButton />
        <BackButton />
        <CancelButton />
        <InfoButton />
        <LanguageToggle />
    </>
  )
}

export default EntryView