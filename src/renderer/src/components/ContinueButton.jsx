import { useLocalization } from '../LanguageContext'

function ContinueButton({ onClick }) {
  const loc = useLocalization()
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveButtonStamp', timeStamp)
    onClick()
  }
  return (
      <button className='continueButton' onClick={handleClick} >
        <p>{loc.continueButton}</p>
      </button>
  )
}

export default ContinueButton