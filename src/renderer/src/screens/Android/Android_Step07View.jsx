import { useLocalization } from '../../LanguageContext'
import { useState, useEffect, useRef } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import InfoOverlay from '../../components/InfoOverlay'
import BottomDesign from '../../components/BottomDesign'
import BottomFont from '../../components/BottomFont'
import inactivityTimer from '../../components/Timer'
import Android_DE_07 from '../../assets/phones/Android_DE_07.mp4'
import Android_EN_07 from '../../assets/phones/Android_EN_07.mp4'

function Android_Step07View() {
  const loc = useLocalization()
  inactivityTimer()
  const navigate = useNavigate()
  const videoRef = useRef()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play()
    }
  }, [])

  // Overlay State
  const [overlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => setOverlayVisible(!overlayVisible);
  return (
    <>
            <ProgressBar progress={10}/>
        <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
          <BackButton onClick={() => navigate('/Android_Step06View')}/>
          <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline03}</h1>
          <CancelButton  onClick={() => navigate('/')}/>
        </div>
      <div className='fullWidth'>
        <InfoOverlay overlayNumber={7} isVisible={overlayVisible} onClose={toggleOverlay}/>


        <div className='topAlign spacer px-100'>
          <div style={{width: '44vw'}}>
            <p className='text-medium pb-30'>{loc.stepViewText0301}</p>
            <p className='text-medium pb-30'>{loc.stepViewText0302Android}</p>            
          </div>

          <video ref={videoRef} className='phoneGraphic mt-100' src={loc.languageKey == 'de' ? Android_DE_07 : Android_EN_07 } loop />

          <InfoButton theme={'dark'} onClick={toggleOverlay}/>
        </div>
        <div className='center continueButtonContainer'>
          <ContinueButton onClick={() => navigate('/Android_Step08View')} />
        </div>
        <BottomDesign design={true}/>
        <BottomDesign design={false}/>
        <BottomFont />  
      </div>
    </>
  )
}

export default Android_Step07View