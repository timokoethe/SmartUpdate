import { useState } from 'react'

function AndroidPicker({ onClick, withQRCode }) {
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveAndroidStamp', timeStamp)
    onClick()
  }
  return (
      <button className={`${withQRCode ? 'androidPickerWithQRCode' : 'androidPicker'}`} onClick={handleClick}/>
  )
}

export default AndroidPicker