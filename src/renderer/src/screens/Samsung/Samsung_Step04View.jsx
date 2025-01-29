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
import Samsung_DE_04 from '../../assets/phones/Samsung_DE_04.mp4'
import Samsung_EN_04 from '../../assets/phones/Samsung_EN_04.mp4'

function Samsung_Step04View() {
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
        <BackButton onClick={() => navigate('/Samsung_Step03View')}/>
        <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline02}</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='fullWidth'>

        <div className='topAlign spacer px-100'>
          <div style={{width: '44vw'}}>
            <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: loc.stepViewText0201_Samsung }} />
          </div>

          <video ref={videoRef} className='phoneGraphic mt-100' src={loc.languageKey == 'de' ? Samsung_DE_04 : Samsung_EN_04 } loop />

          <InfoButton theme={'light'}/>
        </div>
        <div className='center continueButtonContainer'>
          <ContinueButton onClick={() => navigate('/Samsung_WarningView')} />
        </div>
        <BottomDesign design={true}/>
        <BottomDesign design={false}/>
        <BottomFont />
      </div>
    </>
  )
}

export default Samsung_Step04View