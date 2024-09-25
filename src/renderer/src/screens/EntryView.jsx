import { useState } from 'react'
import StartButton from '../components/StartButton'
import ProgressBar from '../components/ProgressBar'

function EntryView() {
  return (
    <>
        <h1>SmartUpdate</h1>
        <ProgressBar />
        <StartButton />
    </>
  )
}

export default EntryView