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
import qrcode from '../../assets/icons/iOS_qrcode.png'


function iOS_Step01View() {
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
      <dev className='fullWidth'>
        <InfoOverlay overlayNumber={3} isVisible={overlayVisible} onClose={toggleOverlay}/>
        <ProgressBar progress={4}/>
        <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
          <BackButton onClick={() => navigate('/PickerView')}/>
          <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline01}</h1>
          <CancelButton  onClick={() => navigate('/')}/>
        </div>

        <div className='topAlign spacer px-100'>
          <div style={{width: '44vw'}}>
            <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: loc.stepViewText0101QRCode  }} /> 
          </div>
          <img src={qrcode} alt='iPhone' className='my-100 stepImage'/>

          <InfoButton theme={'dark'} onClick={toggleOverlay}/>
        </div>
        <div className='center continueButtonContainer'>
          <ContinueButton onClick={() => navigate('/iOS_Step02View')} />
        </div>
        <BottomDesign />
        <BottomFont />
      </dev>
    </>
  )
}

export default iOS_Step01View