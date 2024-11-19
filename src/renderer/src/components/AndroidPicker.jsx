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
  if (!isVisible) return null
  return (
    <div className='fullBackgroundBlur'>
      <div className='wifiWarningOverlay'>
        <div className='wifiWarningContentContainer'>
          <p className='text'>{loc.updateWarningText}</p>
        </div>
        <div className='wifiWarningButtonContainer mt-100'>
            <button className='androidPickerCloseButton' onClick={handleClick} />
            <button onClick={() => navigate('/Android_Step01View')}>Samsung</button>
            <button onClick={() => navigate('/Android_Step01View')}>Huawei</button>
        </div>
      </div>
    </div>
  )
}

export default AndroidPicker