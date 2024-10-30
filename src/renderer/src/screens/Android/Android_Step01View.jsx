import { useLocalization } from '../../LanguageContext'
import { useState, useEffect, useRef } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import qrcode from '../../assets/icons/Android_qrcode.png'
import InfoOverlay from '../../components/InfoOverlay'
import BottomDesign from '../../components/BottomDesign'
import BottomFont from '../../components/BottomFont'
import inactivityTimer from '../../components/Timer'
import Android_DE_01 from '../../assets/phones/Android_DE_01.mp4'
import Android_EN_01 from '../../assets/phones/Android_EN_01.mp4'

function Android_Step01View({ withQRCode }) {
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
        <InfoOverlay overlayNumber={3} isVisible={overlayVisible} onClose={toggleOverlay}/>
        <ProgressBar progress={4}/>
        <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
          <BackButton onClick={() => navigate('/PickerView')}/>
          <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline01}</h1>
          <CancelButton  onClick={() => navigate('/')}/>
        </div>

        <div className='topAlign spacer px-100'>
          <div style={{width: '44vw'}}>
            <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: withQRCode ? loc.stepViewText0101QRCode : loc.stepViewText0101  }} /> 
          </div>

          {
            withQRCode ? 
            <img src={qrcode} alt='iPhone' className='my-100 stepImage'/>
            :
            <video ref={videoRef} className='phoneGraphic mt-100' src={loc.languageKey == 'de' ? Android_DE_01 : Android_EN_01} loop />
          }

          <InfoButton theme={'dark'} onClick={toggleOverlay}/>
        </div>

        <div className='center continueButtonContainer'>
          <ContinueButton onClick={() => navigate('/Android_Step02View')} />
        </div>
        <BottomDesign />
        <BottomFont />
      </div>
    </>
  )
}

export default Android_Step01View