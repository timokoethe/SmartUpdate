import { useLocalization } from '../LanguageContext'
import { useState } from 'react'
import ApplePicker from '../components/ApplePicker'
import AndroidPicker from '../components/AndroidPicker'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../components/InfoButton'
import CancelButton from '../components/CancelButton'
import ProgressBar from '../components/ProgressBar'
import InfoOverlay from '../components/InfoOverlay'
import BottomDesign from '../components/BottomDesign'
import BottomFont from '../components/BottomFont'
import inactivityTimer from '../components/Timer'

function PickerView() {
  const loc = useLocalization()
  inactivityTimer()
  const navigate = useNavigate()
  // Overlay State
  const [overlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => setOverlayVisible(!overlayVisible);
  
  return (
    <>
    <div className='fullWidth'>
      <InfoOverlay overlayNumber={2} isVisible={overlayVisible} onClose={toggleOverlay}/>
      
      <ProgressBar progress={3}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <InfoButton theme={'dark'} onClick={toggleOverlay}/>
        <h1 className='headline mb-150 mt-50'>{loc.pickerViewHeadline}</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>
      <div>
        <p className='text mx-80 leading mb-150'>{loc.pickerViewText01}</p>
        <p className='text mx-80 leading my-100'>{loc.pickerViewText02}</p>
        <p className='text center mt-300'>{loc.pickerViewText03}</p>
      </div>
      <div className='spacer mt-100 px-200'>
        <AndroidPicker onClick={() => navigate('/Android_Step01View')} />
        <ApplePicker onClick={() => navigate('/IOS_Step01View')} />
      </div>
      <BottomDesign />
      <BottomFont />
    </div>

    </>
  )
}

export default PickerView

/*






*/