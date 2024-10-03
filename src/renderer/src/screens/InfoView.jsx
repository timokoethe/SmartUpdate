import { useState } from 'react'
import ContinueButton from '../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'

function InfoView() {
  const navigate = useNavigate()
  return (
    <>
        <ProgressBar progress={1}/>
        <h1 className='headline mt-100'>Why are Software Updates so important?</h1>
        <div className='fullWidth px-80 my-150'>
          <p className='text leading'> What do you think?</p>
          <p className='text-small leading'>Choose one or more answers that you think are important.</p>
        </div>

        <div className='mt-300'>
          <ContinueButton onClick={() => navigate('/SolutionView')} />
        </div>

    </>
  )
}

export default InfoView