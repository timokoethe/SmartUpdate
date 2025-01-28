import { useLocalization } from '../LanguageContext'
import { useNavigate } from 'react-router-dom'

function AndroidPicker({ isVisible, onClose }) {
  const loc = useLocalization()
  const navigate = useNavigate()
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveInfoCloseStamp', timeStamp)
    onClose()
  }

  const handleSamsungClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveSamsungStamp', timeStamp)
    onClose()
  }

  const handleHuaweiClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveHuaweiStamp', timeStamp)
    onClose()
  }

  if (!isVisible) return null
  return (
    <div className='fullBackgroundBlur'>
      <div className='androidPickerOverlay'>
        <div className='androidPickerButtonContainer'>
          <button className='androidPickerCloseButton' onClick={handleClick} />
        </div>

        <div className='androidPickerContent'>
          <p className='text'>{loc.androidPickerText}</p>
        </div>
        <div className='androidPickerConatiner mt-100'>
            <button className='brandButton' onClick={() => {handleSamsungClick(); navigate('/Samsung_Step01View')}}>Samsung</button>
            <button className='brandButton' onClick={() => {handleHuaweiClick(); navigate('/Android_Step01View')}}>Huawei</button>
        </div>
      </div>
    </div>
  )
}

export default AndroidPicker