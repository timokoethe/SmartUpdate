import { useLocalization } from '../LanguageContext'
import { useEffect, useRef } from 'react'

import Android_1_de from '../assets/videos/Background.mp4'
import Android_1_en from '../assets/videos/Background.mp4'
import iOS_1_de from '../assets/videos/Background.mp4'
import iOS_1_en from '../assets/videos/Background.mp4'

function Phone({os, stepNumber}) {
  const loc = useLocalization()
  const videoRef = useRef()

  // autostart the video and mute it
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play()
    }
  },[])

  // get the right video for the phone

  const getVideo = (stepNumber) => {
    if (os === 'Android') {
      switch (stepNumber) {
        case 1:
          return loc.languageKey === 'de' ? Android_1_de : Android_1_en
        case 2:
          return loc.languageKey === 'de' ? Android_1_de : Android_1_en
        case 3:
          return loc.languageKey === 'de' ? Android_1_de : Android_1_en
        default:
          return Android_1_de
      }
    } else {
      switch (stepNumber) {
        case 1:
          return loc.languageKey === 'de' ? Android_1_de : Android_1_en
        case 2:
          return loc.languageKey === 'de' ? Android_1_de : Android_1_en
        case 3:
          return loc.languageKey === 'de' ? Android_1_de : Android_1_en
        default:
          return Android_1_de
      }
    }
  }

  const video1 = getVideo(stepNumber)


  return (
    <video ref={videoRef} src={video1} className='phoneVideo' loop />
  )
}

export default Phone