import { useLocalization } from '../../LanguageContext'
import { useState, useEffect, useRef } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import InfoOverlay from '../../components/InfoOverlay'
import UpdateWarning from '../../components/UpdateWarning'
import BottomDesign from '../../components/BottomDesign'
import BottomFont from '../../components/BottomFont'
import inactivityTimer from '../../components/Timer'
import Samsung_DE_06 from '../../assets/phones/Samsung_DE_06.mp4'
import Samsung_EN_06 from '../../assets/phones/Samsung_EN_06.mp4'

function Samsung_Step06View() {
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
    
  // Warning State
  const [warningVisible, setWarningVisible] = useState(false);
  const toggleWarning = () => setWarningVisible(!warningVisible);
  return (
    <>
      <div className='fullWidth'>
        <InfoOverlay overlayNumber={6} isVisible={overlayVisible} onClose={toggleOverlay}/>
        <UpdateWarning onClick={() => navigate('/Samsung_Step07View')} isVisible={warningVisible}/>
        <ProgressBar progress={9}/>
        <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
          <BackButton onClick={() => navigate('/Samsung_Step04View')}/>
          <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline03}</h1>
          <CancelButton  onClick={() => navigate('/')}/>
        </div>

        <div className='topAlign spacer px-100'>
          <div style={{width: '44vw'}}>
            <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: loc.stepViewText0301_Samsung }} />
          </div>

          <video ref={videoRef} className='phoneGraphic mt-100' src={loc.languageKey == 'de' ? Samsung_DE_06 : Samsung_EN_06 } loop />

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

export default Samsung_Step06View