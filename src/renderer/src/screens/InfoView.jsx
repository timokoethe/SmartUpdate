import { useLocalization } from '../LanguageContext'
import ContinueButton from '../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import AnswerOption from '../components/AnswerOption'
import BottomDesign from '../components/BottomDesign'
import BottomFont from '../components/BottomFont'
import inactivityTimer from '../components/Timer'
import InfoButton from '../components/InfoButton'
import CancelButton from '../components/CancelButton'

function InfoView() {
  const loc = useLocalization()
  inactivityTimer()
  const navigate = useNavigate()
  return (
    <>
      <ProgressBar progress={1} />
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <InfoButton theme={'light'} />
        <h1 className='headline mt-100'>{loc.infoViewHeadline}</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>
      <div className='fullWidth px-80 my-150'>
        <p className='text leading'>{loc.infoViewText01}</p>
        <p className='text-small leading'>{loc.infoViewText02}</p>
      </div>

      <AnswerOption optionNumber={1} clickable={true}/>
      <AnswerOption optionNumber={2} clickable={true}/>
      <AnswerOption optionNumber={3} clickable={true}/>
      <AnswerOption optionNumber={4} clickable={true}/>
      <AnswerOption optionNumber={5} clickable={true}/>

      <div className='continueButtonContainerBottom center'>
        <ContinueButton onClick={() => navigate('/SolutionView')} />
      </div>
      <BottomDesign />
      <BottomFont />
    </>
  )
}

export default InfoView