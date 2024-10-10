import { useState } from 'react'

function ContinueButton({ onClick }) {
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveButtonStamp', timeStamp)
    onClick()
  }
  return (
      <button className='continueButton' onClick={handleClick} >
        <p>Continue</p>
      </button>
  )
}

export default ContinueButton