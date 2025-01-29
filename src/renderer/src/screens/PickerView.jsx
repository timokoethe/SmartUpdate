import { useLocalization } from '../LanguageContext'
import { useState } from 'react'
import Picker from '../components/Picker'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../components/InfoButton'
import CancelButton from '../components/CancelButton'
import ProgressBar from '../components/ProgressBar'
import InfoOverlay from '../components/InfoOverlay'
import BottomDesign from '../components/BottomDesign'
import BottomFont from '../components/BottomFont'
import inactivityTimer from '../components/Timer'
import AndroidPicker from '../components/AndroidPicker'

function PickerView() {
  const loc = useLocalization()
  inactivityTimer()
  const navigate = useNavigate()
  // Overlay State
  const [overlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => setOverlayVisible(!overlayVisible);

  // Android Picker State
  const [androidPickerVisible, setAndroidPickerVisible] = useState(false);
  const toggleAndroidPicker = () => setAndroidPickerVisible(!androidPickerVisible);
  
  return (
    <>
      <ProgressBar progress={3}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
          <InfoButton theme={'dark'} onClick={toggleOverlay} />
          <h1 className='headline mb-150 mt-50'>{loc.pickerViewHeadline}</h1>
          <CancelButton  onClick={() => navigate('/')}/>
        </div>

      <div className='fullWidth'>
        <InfoOverlay overlayNumber={2} isVisible={overlayVisible} onClose={toggleOverlay}/>
        <AndroidPicker isVisible={androidPickerVisible} onClose={toggleAndroidPicker}/>
        <div>
          <p className='text mx-60 leading mb-150 break'>{loc.pickerViewText01}</p>
          <p className='text mx-60 leading my-100'>{loc.pickerViewText02}</p>
          <p className='text center mt-300'>{loc.pickerViewText03WithoutQRCode}</p>
        </div>
        <div className='spacer mt-200 px-200'>
          <Picker withQRCode={false} onClick={toggleAndroidPicker} os={'Android'}/>
          <Picker withQRCode={false} onClick={() => navigate('/IOS_Step01View')} os={'iOS'}/>
        </div>
        <BottomDesign design={true}/>
        <BottomDesign design={false}/>
        <BottomFont />
      </div> 
    </>
  )
}

export default PickerView