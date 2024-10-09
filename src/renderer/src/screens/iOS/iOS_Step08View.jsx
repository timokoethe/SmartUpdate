import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import image from '../../assets/icons/iPhone.png'

function iOS_Step08View() {
  const navigate = useNavigate()
    // Overlay State
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => setOverlayVisible(!overlayVisible);
  return (
    <>
      <ProgressBar progress={111}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/iOS_Step07View')}/>
        <h1 className='headline mb-150 mt-50'>3. Search for Updates</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='topAlign spacer px-100'>
        <div style={{width: '44vw'}}>
          <p className='text-medium pb-30'>1. Once you have enabled the Automatic Update function, 
            go one step back to the <i>Software Update</i> tab. Your phone starts searching for 
            updates.</p>
          <p className='text-medium pb-30'>2. If an update is available, it is displayed as on 
            the right, otherwise nothing appears and you are already up-to-date.</p>    
          <p className='text-medium pb-30'>3. Click on <i>Update Now</i> to start the Update 
          immediately. It may take some time until the update is finished.</p>         
        </div>

        <img src={image} alt='iPhone' className='my-100'/>

        <InfoButton theme={'dark'} onClick={toggleOverlay}/>
      </div>

      <ContinueButton onClick={() => navigate('/CelebViewiOS')} />
    </>
  )
}

export default iOS_Step08View