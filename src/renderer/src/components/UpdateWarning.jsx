import ContinueButton from './ContinueButton'
import CheckIcon from '../assets/icons/WarningIcon.png'

function UpdateWarning({ onClick, isVisible }) {
  if (!isVisible) return null
  return (
    <div className='wifiWarningOverlayScreen'>
      <div className='wifiWarningOverlay'>
        <div className='wifiWarningContentContainer'>
          <img src={CheckIcon} className='wifiWarningIcon' />
          <p className='text'>If you want to execute the following steps right now, 
            make sure you are connected to Wi-Fi because Updates may be large.</p>
        </div>
        <div className='wifiWarningButtonContainer mt-100'>
          <ContinueButton onClick={onClick}/>
        </div>
      </div>
    </div>
  )
}

export default UpdateWarning