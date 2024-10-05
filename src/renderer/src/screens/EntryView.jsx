import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import video from '../assets/videos/Background.mp4'
import InfoButton from '../components/InfoButton'
import InfoWidget from '../components/InfoWidget'
import StartButton from '../components/StartButton'
import LanguageToggle from '../components/LanguageToggle'

function EntryView() {
  const navigate = useNavigate()
  const videoRef = useRef()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play()
    }
  }, [])
  
  return (
    <>
      <video ref={videoRef} style={{position: 'fixed'}} src={video} loop />
      <div style={{position: 'fixed'}}>
      <div className='spacer mt-100'>
        <InfoButton theme={'light'}/>
        <LanguageToggle />
      </div>

      <InfoWidget widgetNumber={1} />
      <StartButton onClick={() => navigate('/InfoView')} />
      </div>


    </>
  )
}

export default EntryView