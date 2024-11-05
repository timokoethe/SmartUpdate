import ContinueButton from './ContinueButton'
import CheckIcon from '../assets/icons/WarningIcon.png'
import { useLocalization } from '../LanguageContext'

function UpdateWarning({ onClick, isVisible }) {
  const loc = useLocalization()
  if (!isVisible) return null
  return (
    <div className='wifiWarningOverlayScreen'>
      <div className='wifiWarningOverlay'>
        <div className='wifiWarningContentContainer'>
          <img src={CheckIcon} className='wifiWarningIcon' />
          <p className='text'>{loc.updateWarningText}</p>
        </div>
        <div className='wifiWarningButtonContainer mt-100'>
          <ContinueButton onClick={onClick}/>
        </div>
      </div>
    </div>
  )
}

export default UpdateWarning