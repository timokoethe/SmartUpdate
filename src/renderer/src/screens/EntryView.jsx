import { useState } from 'react'
import StartButton from '../components/StartButton'
import ProgressBar from '../components/ProgressBar'
import ContinueButton from '../components/ContinueButton'
import BackButton from '../components/BackButton'
import CancelButton from '../components/CancelButton'

function EntryView() {
  return (
    <>
        <ProgressBar progress={9}/>
        <StartButton />
        <ContinueButton />
        <BackButton />
        <CancelButton />
    </>
  )
}

export default EntryView