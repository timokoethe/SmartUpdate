import { useState } from 'react'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import video from '../assets/videos/Background.mp4'
import InfoButton from '../components/InfoButton'
import InfoWidget from '../components/InfoWidget'
import StartButton from '../components/StartButton'
import LanguageToggle from '../components/LanguageToggle'
import InfoOverlay from '../components/InfoOverlay'

function EntryView() {
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
      <video ref={videoRef} className='video' src={video} loop />

      <div className='fullWidth'>
        <InfoOverlay overlayNumber={1} isVisible={overlayVisible} onClose={toggleOverlay}/>
        <div className='mt-100 spacer px-100'>
          <InfoButton theme={'light'} onClick={toggleOverlay}/>
          <LanguageToggle />
        </div>

        <div className='entryContainer' >
          <div className='widgetContainer'>
            <div className='leftWidget'>
              <InfoWidget widgetNumber={1} />
            </div>
            <div className='middleWidget'>
              <InfoWidget widgetNumber={2} />
            </div>
            <div className='rightWidget'>
              <InfoWidget widgetNumber={3} />
            </div>
          </div>
          <StartButton onClick={() => navigate('/QuizView')} />
        </div>
      </div>
    </>
  )
}

export default EntryView