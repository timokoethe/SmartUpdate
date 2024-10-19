import { useLocalization } from '../LanguageContext'
import ContinueButton from '../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import BottomDesign from '../components/BottomDesign'
import BottomFont from '../components/BottomFont'
import inactivityTimer from '../components/Timer'
import SolutionOption from '../components/SolutionOption'
import CancelButton from '../components/CancelButton'
import BackButton from '../components/BackButton'

function SolutionView() {
  const loc = useLocalization()
  inactivityTimer()
  const navigate = useNavigate()
  return (
    <>
      <ProgressBar progress={2} />
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/InfoView')}/>
        <h1 className='headline mt-100'>{loc.infoViewHeadline}</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='fullWidth px-80 my-150 hide'>
        <p className='text leading'>{loc.infoViewText01}</p>
        <p className='text-small leading'>{loc.infoViewText02}</p>
      </div>

      <SolutionOption optionNumber={1} />
      <SolutionOption optionNumber={2} />
      <SolutionOption optionNumber={3} />
      <SolutionOption optionNumber={4} />
      <SolutionOption optionNumber={5} />

      <div className='continueButtonContainerBottom center' >
        <ContinueButton onClick={() => navigate('/PickerView')} />
      </div>
      <BottomDesign />
      <BottomFont />
    </>
  )
}

export default SolutionView