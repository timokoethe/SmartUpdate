import { useLocalization } from '../../LanguageContext'
import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import image from '../../assets/phones/iOS_Step07.png'
import InfoOverlay from '../../components/InfoOverlay'
import BottomDesign from '../../components/BottomDesign'
import BottomFont from '../../components/BottomFont'
import inactivityTimer from '../../components/Timer'

function iOS_Step07View() {
  const loc = useLocalization()
  inactivityTimer()
  const navigate = useNavigate()
    // Overlay State
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => setOverlayVisible(!overlayVisible);
  return (
    <>
      <div className='fullWidth'>
        <InfoOverlay overlayNumber={7} isVisible={overlayVisible} onClose={toggleOverlay}/>
        <ProgressBar progress={10}/>
        <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
          <BackButton onClick={() => navigate('/iOS_Step06View')}/>
          <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline03}</h1>
          <CancelButton  onClick={() => navigate('/')}/>
        </div>

        <div className='topAlign spacer px-100'>
          <div style={{width: '44vw'}}>
            <p className='text-medium pb-30'>{loc.stepViewText0301}</p>
            <p className='text-medium pb-30'>{loc.stepViewText0302}</p>            
          </div>

          <img src={image} alt='iPhone' className='my-100 stepImage'/>

          <InfoButton theme={'dark'} onClick={toggleOverlay}/>
        </div>

        <div className='center continueButtonContainer'>
          <ContinueButton onClick={() => navigate('/iOS_Step08View')} />
        </div>
        <BottomDesign />
        <BottomFont />
      </div>
    </>
  )
}

export default iOS_Step07View