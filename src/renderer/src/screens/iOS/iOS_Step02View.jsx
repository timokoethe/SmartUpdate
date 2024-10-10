import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import image from '../../assets/phones/iOS_Step02.png'
import InfoOverlay from '../../components/InfoOverlay'
import BottomDesign from '../../components/BottomDesign'
import BottomFont from '../../components/BottomFont'

function iOS_Step02View() {
  const navigate = useNavigate()
    // Overlay State
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => setOverlayVisible(!overlayVisible);
  return (
    <>
      <div className='fullWidth'>
      <InfoOverlay overlayNumber={9} isVisible={overlayVisible} onClose={toggleOverlay}/>
        <ProgressBar progress={5}/>
        <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
          <BackButton onClick={() => navigate('/iOS_Step01View')}/>
          <h1 className='headline mb-150 mt-50'>1. Find the Update Settings</h1>
          <CancelButton  onClick={() => navigate('/')}/>
        </div>

        <div className='topAlign spacer px-100 '>
          <div style={{width: '44vw'}}>
            <p className='text-medium pb-30'>1. Search for your Settings App.</p>
            <p className='text-medium pb-30'>2. Go to <i>General</i>.</p>
          </div>

          <img src={image} alt='iPhone' className='my-100'/>

          <InfoButton theme={'dark'} onClick={toggleOverlay}/>
        </div>
        <div className='center continueButtonContainer'>
          <ContinueButton onClick={() => navigate('/iOS_Step03View')} />
        </div>
        <BottomDesign />
        <BottomFont />
      </div>
    </>
  )
}

export default iOS_Step02View