import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import image from '../../assets/icons/iPhone.png'
import InfoOverlay from '../../components/InfoOverlay'

function Android_Step03View() {
  const navigate = useNavigate()
    // Overlay State
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => setOverlayVisible(!overlayVisible);
  return (
    <>
      <div className='fullWidth'>
        <InfoOverlay overlayNumber={5} isVisible={overlayVisible} onClose={toggleOverlay}/>
        <ProgressBar progress={6}/>
        <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
          <BackButton onClick={() => navigate('/Android_Step02View')}/>
          <h1 className='headline mb-150 mt-50'>1. Find the Update Settings</h1>
          <CancelButton  onClick={() => navigate('/')}/>
        </div>

        <div className='topAlign spacer px-100'>
          <div style={{width: '44vw'}}>
            <p className='text-medium pb-30'>1. Search for your Settings App.</p>
            <p className='text-medium pb-30'>2. Scroll to <i>System & updates</i>.</p>
            <p className='text-medium pb-30'>3. Go to <i>Software update</i>.</p>
          </div>

          <img src={image} alt='iPhone' className='my-100'/>

          <InfoButton theme={'dark'} onClick={toggleOverlay}/>
        </div>
        <div className='center'>
          <ContinueButton onClick={() => navigate('/Android_Step04View')} />
        </div>

      </div>
    </>
  )
}

export default Android_Step03View