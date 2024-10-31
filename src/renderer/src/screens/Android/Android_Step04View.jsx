import { useLocalization } from '../../LanguageContext'
import { useState, useEffect, useRef } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import BottomDesign from '../../components/BottomDesign'
import BottomFont from '../../components/BottomFont'
import inactivityTimer from '../../components/Timer'
import Android_DE_04 from '../../assets/phones/Android_DE_04.mp4'
import Android_EN_04 from '../../assets/phones/Android_EN_04.mp4'

function Android_Step04View() {
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

  return (
    <>
      <ProgressBar progress={7}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/Android_Step03View')}/>
        <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline02}</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='topAlign spacer px-100'>
        <div style={{width: '44vw'}}>
          <p className='text-medium pb-30'>{loc.stepViewText0201Android}</p>
        </div>

        <video ref={videoRef} className='phoneGraphic mt-100' src={loc.languageKey == 'de' ? Android_DE_04 : Android_EN_04 } loop />

        <InfoButton theme={'light'}/>
      </div>
      <div className='center continueButtonContainer'>
        <ContinueButton onClick={() => navigate('/Android_Step05View')} />
      </div>
      <BottomDesign />
      <BottomFont />
    </>
  )
}

export default Android_Step04View