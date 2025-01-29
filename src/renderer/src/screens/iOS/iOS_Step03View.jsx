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
import iOS_DE_03 from '../../assets/phones/iOS_DE_03.mp4'
import iOS_EN_03 from '../../assets/phones/iOS_EN_03.mp4'

function iOS_Step03View({ withQRCode }) {
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
            <ProgressBar progress={6}/>
        <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
          <BackButton onClick={() => navigate('/iOS_Step02View')}/>
          <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline01}</h1>
          <CancelButton  onClick={() => navigate('/')}/>
        </div>
      <div className='fullWidth'>
        <InfoOverlay overlayNumber={10} isVisible={overlayVisible} onClose={toggleOverlay}/>


        <div className='topAlign spacer px-100'>
          <div style={{width: '44vw'}}>
            <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: loc.stepViewText0101 }} /> 
            <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: loc.stepViewText0102iOS }} /> 
            <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: loc.stepViewText0103iOS }} /> 
          </div>

          <video ref={videoRef} className='phoneGraphic mt-100' src={loc.languageKey == 'de' ? iOS_DE_03 : iOS_EN_03} loop />

          <InfoButton theme={'dark'} onClick={toggleOverlay}/>
        </div>
        <div className='center continueButtonContainer'>
          <ContinueButton onClick={() => navigate('/iOS_Step04View')} />
        </div>
        <BottomDesign design={true}/>
        <BottomDesign design={false}/>
        <BottomFont />    
      </div>
    </>
  )
}

export default iOS_Step03View