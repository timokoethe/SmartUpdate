import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'

function Android_Step05View() {
  const navigate = useNavigate()
  return (
    <>
      <ProgressBar progress={8}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/Android_Step04View')}/>
        <h1 className='headline mb-150 mt-50'>2. Enable Automatic Update</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='spacer px-100'>
        <p className='text-medium'>1. Click on the gear icon.</p>
      </div>
      <div className='spacer px-100'>
        <p className='text-medium'>2. If not enabled, activate <i>all</i> options.</p>
      </div>

      <ContinueButton onClick={() => navigate('/Android_WarningView')} />
    </>
  )
}

export default Android_Step05View