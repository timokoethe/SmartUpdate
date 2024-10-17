import { useLocalization } from '../LanguageContext'
import ContinueButton from './ContinueButton'
import CheckIcon from '../assets/icons/TickIcon.png'

function WifiWarning({ onClick }) {
  const loc = useLocalization()
  return (
    <div className='wifiWarning'>
      <div className='wifiWarningContentContainer'>
      <img src={CheckIcon} className='wifiWarningIcon' />
        <p className='text'>{loc.wifiWarningText}</p>
      </div>
      <div className='wifiWarningButtonContainer my-50 mt-100'>
        <ContinueButton onClick={onClick}/>
      </div>

    </div>
  )
}

export default WifiWarning