import { useState } from 'react'
import ContinueButton from '../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import AnswerOption from '../components/AnswerOption'


function SolutionView() {
  const navigate = useNavigate()
  return (
    <>
        <ProgressBar progress={2}/>
        <h1 className='headline mt-100'>Why are Software Updates so important?</h1>
        <div className='fullWidth px-80 my-150'>
          <p className='text leading'> What do you think?</p>
          <p className='text-small leading'>Choose one or more answers that you think are important.</p>
        </div>

        <AnswerOption optionNumber={1} clickable={false}/>
        <AnswerOption optionNumber={2} clickable={false}/>
        <AnswerOption optionNumber={3} clickable={false}/>
        <AnswerOption optionNumber={4} clickable={false}/>
        <AnswerOption optionNumber={5} clickable={false}/>

        <div className='mt-300'>
          <ContinueButton onClick={() => navigate('/PickerView')} />
        </div>
    </>
  )
}

export default SolutionView