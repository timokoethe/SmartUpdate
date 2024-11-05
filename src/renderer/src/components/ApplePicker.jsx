import { useState } from 'react'

function ApplePicker({ onClick, withQRCode }) {
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveAppleStamp', timeStamp)
    onClick()
  }
  return (
      <button className={`${withQRCode ? 'applePickerWithQRCode' : 'applePicker'}`} onClick={handleClick} />
  )
}

export default ApplePicker