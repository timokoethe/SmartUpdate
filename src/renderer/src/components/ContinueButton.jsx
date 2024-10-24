import { useLocalization } from '../LanguageContext'

function ContinueButton({ onClick, disabled }) {
  const loc = useLocalization()
  const handleClick = () => {
    if (disabled) return
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveButtonStamp', timeStamp)
    onClick()
  }
  return (
      <button className={`continueButton ${disabled ? 'continueButtonDisabled' : {}}`} onClick={handleClick} >
        <p>{loc.continueButton}</p>
      </button>
  )
}

export default ContinueButton