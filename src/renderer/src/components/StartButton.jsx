import { useState } from 'react'

function StartButton({ onClick }) {
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveStartStamp', timeStamp)
    onClick()
  }

  return (
    <button className='startButton' onClick={handleClick} >
      <p>TAP <br/>TO START</p>
    </button>
  )
}

export default StartButton