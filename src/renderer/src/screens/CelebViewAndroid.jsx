import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import video from '../assets/videos/Confetti.mov'

function CelebViewAndroid() {
  const navigate = useNavigate()
  const videoRef = useRef()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play()
    }

    const handleVideoEnd = () => {
      navigate('/FinalViewAndroid')
    }

    if (videoRef.current) {
      videoRef.current.onended = handleVideoEnd
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      }
    }
  }, [])

  return (
    <>
      <video ref={videoRef} className='video fullWidth' src={video} />
      <h1 className='headline-large white center pt-300'>Congratulations!</h1>
    </>
  )
}

export default CelebViewAndroid