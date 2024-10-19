import { useLocalization } from '../../LanguageContext'
import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import image from '../../assets/phones/Android_Step06.png'
import InfoOverlay from '../../components/InfoOverlay'
import BottomDesign from '../../components/BottomDesign'
import BottomFont from '../../components/BottomFont'
import inactivityTimer from '../../components/Timer'

function Android_Step08View() {
  const loc = useLocalization()
  inactivityTimer()
  const navigate = useNavigate()
    // Overlay State
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => setOverlayVisible(!overlayVisible);
  return (
    <>
      <div className='fullWidth'>
      <InfoOverlay overlayNumber={8} isVisible={overlayVisible} onClose={toggleOverlay}/>
        <ProgressBar progress={11}/>
        <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
          <BackButton onClick={() => navigate('/Android_Step07View')}/>
          <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline03}</h1>
          <CancelButton  onClick={() => navigate('/')}/>
        </div>

        <div className='topAlign spacer px-100'>
          <div style={{width: '44vw'}}>
            <p className='text-medium pb-30'>{loc.stepViewText0301}</p>
            <p className='text-medium pb-30'>{loc.stepViewText0302}</p>    
            <p className='text-medium pb-30' dangerouslySetInnerHTML={{ __html: loc.stepViewText0303 }} />        
          </div>

          <img src={image} alt='iPhone' className='my-100 stepImage'/>

          <InfoButton theme={'dark'} onClick={toggleOverlay}/>
        </div>
        <div className='center continueButtonContainer'>
          <ContinueButton onClick={() => navigate('/CelebViewAndroid')} />
        </div>
        <BottomDesign />
        <BottomFont />
      </div>
    </>
  )
}

export default Android_Step08View