
import { useState } from 'react'
import ApplePicker from '../components/ApplePicker'
import AndroidPicker from '../components/AndroidPicker'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../components/InfoButton'
import CancelButton from '../components/CancelButton'
import ProgressBar from '../components/ProgressBar'
import InfoOverlay from '../components/InfoOverlay'

function PickerView() {
  const navigate = useNavigate()
  // Overlay State
  const [overlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => setOverlayVisible(!overlayVisible);
  
  return (
    <>
    <div className='fullWidth'>
      <InfoOverlay overlayNumber={1} isVisible={overlayVisible} onClose={toggleOverlay}/>
      
      <ProgressBar progress={3}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
      <InfoButton theme={'dark'} onClick={toggleOverlay}/>
        <h1 className='headline mb-150 mt-50'>1. Choose Platform</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>
      <div>
        <p className='text mx-80 leading mb-150'>Mobile phones offer us a function to perforam updates automatically.<br/>
          In the following we will show you how to activate this and also how to perform an update manually.
        </p>
        <p className='text mx-80 leading my-100'>Grab your phone and try this simultaneously on your own!</p>
        <p className='text center mt-100'>Please choose your platform:</p>
      </div>
      <div className='spacer mt-100 px-200'>
        <AndroidPicker onClick={() => navigate('/Android_Step01View')} />
        <ApplePicker onClick={() => navigate('/IOS_Step01View')} />
      </div>
    </div>

    </>
  )
}

export default PickerView

/*






*/