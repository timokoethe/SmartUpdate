import { useLocalization } from '../../LanguageContext'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'
import image from '../../assets/phones/iOS_Step05.png'
import BottomDesign from '../../components/BottomDesign'
import BottomFont from '../../components/BottomFont'
import inactivityTimer from '../../components/Timer'

function iOS_Step05View() {
  const loc = useLocalization()
  inactivityTimer()
  const navigate = useNavigate()

  return (
    <>
      <ProgressBar progress={8}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/iOS_Step04View')}/>
        <h1 className='headline mb-150 mt-50'>{loc.stepViewHeadline02}</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='topAlign spacer px-100'>
        <div style={{width: '44vw'}}>
          <p className='text-medium pb-30'>{loc.stepViewText0201iOS}</p>
          <p className='text-medium pb-30'>{loc.stepViewText0202}</p>
        </div>

        <img src={image} alt='iPhone' className='my-100 stepImage'/>

        <InfoButton theme={'light'} />
      </div>
      <div className='center continueButtonContainer'>
        <ContinueButton onClick={() => navigate('/iOS_WarningView')} />
      </div>
      <BottomDesign />
      <BottomFont />
    </>
  )
}

export default iOS_Step05View