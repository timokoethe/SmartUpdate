import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import image from '../../assets/icons/iPhone.png'

function iOS_Step04View() {
  const navigate = useNavigate()
    // Overlay State
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => setOverlayVisible(!overlayVisible);
  return (
    <>
      <ProgressBar progress={7}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/iOS_Step03View')}/>
        <h1 className='headline mb-150 mt-50'>2. Enable Automatic Update</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='topAlign spacer px-100'>
        <div style={{width: '44vw'}}>
          <p className='text-medium pb-30'>1. Go to <i>Automatic Updates</i>.</p>
        </div>

        <img src={image} alt='iPhone' className='my-100'/>

        <InfoButton theme={'dark'} onClick={toggleOverlay}/>
      </div>

      <ContinueButton onClick={() => navigate('/iOS_Step05View')} />
    </>
  )
}

export default iOS_Step04View