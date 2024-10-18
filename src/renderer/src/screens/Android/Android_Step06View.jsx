import { useLocalization } from '../../LanguageContext'
import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import image from '../../assets/phones/Android_Step06.png'
import InfoOverlay from '../../components/InfoOverlay'
import UpdateWarning from '../../components/UpdateWarning'
import BottomDesign from '../../components/BottomDesign'
import BottomFont from '../../components/BottomFont'
import inactivityTimer from '../../components/Timer'

function Android_Step06View() {
  const loc = useLocalization()
  inactivityTimer()
  const navigate = useNavigate()
    // Overlay State
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => setOverlayVisible(!overlayVisible);
    
    // Warning State
    const [warningVisible, setWarningVisible] = useState(false);
    const toggleWarning = () => setWarningVisible(!warningVisible);
  return (
    <>
      <div className='fullWidth'>
        <InfoOverlay overlayNumber={6} isVisible={overlayVisible} onClose={toggleOverlay}/>
        <UpdateWarning onClick={() => navigate('/Android_Step07View')} isVisible={warningVisible}/>
        <ProgressBar progress={9}/>
        <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
          <BackButton onClick={() => navigate('/Android_Step05View')}/>
          <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline03}</h1>
          <CancelButton  onClick={() => navigate('/')}/>
        </div>

        <div className='topAlign spacer px-100'>
          <div style={{width: '44vw'}}>
            <p className='text-medium pb-30'>{loc.stepViewText0301}</p>
          </div>

          <img src={image} alt='iPhone' className='my-100 stepImage'/>

          <InfoButton theme={'dark'} onClick={toggleOverlay}/>
        </div>
        <div className='center continueButtonContainer'>
          <ContinueButton onClick={toggleWarning} />
        </div>
        <BottomDesign />
        <BottomFont />
      </div>
    </>
  )
}

export default Android_Step06View