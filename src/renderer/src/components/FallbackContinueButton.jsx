function FallbackContinueButton({ onClick, os }) {
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveButtonStamp', timeStamp)
    onClick()
  }
  return (
      <button className='fallbackContinueButton mb-20' onClick={handleClick} >
        <p>{os}</p>
      </button>
  )
}

export default FallbackContinueButton