import { useLocalization } from '../../LanguageContext'
import { useEffect, useRef } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import BottomDesign from '../../components/BottomDesign'
import BottomFont from '../../components/BottomFont'
import inactivityTimer from '../../components/Timer'
import iOS_DE_05 from '../../assets/phones/iOS_DE_05.mp4'
import iOS_EN_05 from '../../assets/phones/iOS_EN_05.mp4'

function iOS_Step05View() {
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
      <ProgressBar progress={8}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/iOS_Step04View')}/>
        <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline02}</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='fullWidth'>
      <div className='topAlign spacer px-100'>
        <div style={{width: '44vw'}}>
          <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: loc.stepViewText0201iOS }} />
          <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: loc.stepViewText0202 }} />
        </div>

        <video ref={videoRef} className='phoneGraphic mt-100' src={loc.languageKey == 'de' ? iOS_DE_05 : iOS_EN_05} loop />

        <InfoButton theme={'light'} />
      </div>
      <div className='center continueButtonContainer'>
        <ContinueButton onClick={() => navigate('/iOS_WarningView')} />
      </div>
      <BottomDesign design={true}/>
        <BottomDesign design={false}/>
        <BottomFont />    
      </div>
    </>
  )
}

export default iOS_Step05View