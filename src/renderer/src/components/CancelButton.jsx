import { useState } from 'react'

function CancelButton({ onClick }) {
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveCancelStamp', timeStamp)
    onClick()
  }

  return (
      <button className='cancelButton' onClick={handleClick}/>
  )
}

export default CancelButton