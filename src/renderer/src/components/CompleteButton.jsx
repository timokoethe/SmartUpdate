import { useLocalization } from '../LanguageContext'

function CompleteButton({ onClick }) {
  const loc = useLocalization()
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveCompleteStamp', timeStamp)
    onClick()
  }
  return (
      <button className='completeButton' onClick={handleClick} >
        <p>{loc.completeButton}</p>
      </button>
  )
}

export default CompleteButton