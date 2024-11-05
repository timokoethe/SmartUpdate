import { useState } from 'react'

function BackButton({ onClick}) {
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveBackStamp', timeStamp)
    onClick()
  }
  return (
      <button className='backButton' onClick={handleClick}/>
  )
}

export default BackButton