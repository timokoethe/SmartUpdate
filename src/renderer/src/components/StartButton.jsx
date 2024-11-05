import { useLocalization } from '../LanguageContext'

function StartButton({ onClick }) {
  const loc = useLocalization()

  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveStartStamp', timeStamp)
    onClick()
  }

  return (
    <button className='startButton' onClick={handleClick} >
      <p className='break'>{loc.startButton}</p>
    </button>
  )
}

export default StartButton