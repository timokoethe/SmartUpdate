import { useState } from 'react'

function InfoButton({ onClick, theme }) {
  const iconStyle = theme === 'dark' ? 'infoIconDark' : 'infoIconLight'
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveInfoStamp', timeStamp)
    onClick()
  }
  return (
      <button className={`infoButton ${iconStyle}`} onClick={handleClick} />
  )
}

export default InfoButton