import { useState } from 'react'
import StartButton from '../components/StartButton'
import ProgressBar from '../components/ProgressBar'

function EntryView() {
  return (
    <>
        <h1>SmartUpdate</h1>
        <ProgressBar progress={9}/>
        <StartButton />
    </>
  )
}

export default EntryView