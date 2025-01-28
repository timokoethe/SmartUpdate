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
import { useEffect } from 'react'

function SolutionView({ selectedOptions, navigateBack }) {
  const loc = useLocalization()
  inactivityTimer()
  const navigate = useNavigate()

  return (
    <>
      <ProgressBar progress={2} />
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={navigateBack}/>
        <h1 className='headline mt-100'>{loc.infoViewHeadline}</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='fullWidth px-80 my-150 hide'>
        <p className='text leading'>{loc.infoViewText01}</p>
        <p className='text-small leading'>{loc.infoViewText02}</p>
      </div>

      <div>
        <SolutionOption optionNumber={1} selected={selectedOptions.includes('A')} />
        <SolutionOption optionNumber={2} selected={selectedOptions.includes('B')} />
        <SolutionOption optionNumber={3} selected={selectedOptions.includes('C')} />
        <SolutionOption optionNumber={4} selected={selectedOptions.includes('D')} />
        <SolutionOption optionNumber={5} selected={selectedOptions.includes('E')} />
      </div>


      <div className='continueButtonContainerBottom center' >
        <ContinueButton onClick={() => navigate('/PickerView')} />
      </div>
      <BottomDesign />
      <BottomFont />
    </>
  )
}

export default SolutionView