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
import Samsung_DE_08 from '../../assets/phones/Samsung_DE_08.mp4'
import Samsung_EN_08 from '../../assets/phones/Samsung_EN_08.mp4'

function Samsung_Step08View() {
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
      <div className='fullWidth'>
      <InfoOverlay overlayNumber={8} isVisible={overlayVisible} onClose={toggleOverlay}/>
        <ProgressBar progress={11}/>
        <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
          <BackButton onClick={() => navigate('/Samsung_Step07View')}/>
          <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline03}</h1>
          <CancelButton  onClick={() => navigate('/')}/>
        </div>

        <div className='topAlign spacer px-100'>
          <div style={{width: '44vw'}}>
          <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: loc.stepViewText0301_Samsung }} />
          <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: loc.stepViewText0302_Samsung }} />     
            <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: loc.stepViewText0303_Samsung }} />        
          </div>

          <video ref={videoRef} className='phoneGraphic mt-100' src={loc.languageKey == 'de' ? Samsung_DE_08 : Samsung_EN_08 } loop />

          <InfoButton theme={'dark'} onClick={toggleOverlay}/>
        </div>
        <div className='center continueButtonContainer'>
          <ContinueButton onClick={() => navigate('/FinalViewSamsung')} />
        </div>
        <BottomDesign />
        <BottomFont />
      </div>
    </>
  )
}

export default Samsung_Step08View