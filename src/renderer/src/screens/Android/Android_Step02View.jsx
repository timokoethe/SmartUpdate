import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'

function Android_Step02View() {
  const navigate = useNavigate()
  return (
    <>
      <ProgressBar progress={5}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/Android_Step01View')}/>
        <h1 className='headline mb-150 mt-50'>1. Find the Update Settings</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='spacer px-100'>
        <p className='text-medium'>1. Search for your Settings App.</p>
        <InfoButton />
      </div>
      <div className='spacer px-100'>
        <p className='text-medium'>2. Scroll to <i>System & Updates</i>.</p>
      </div>

      <ContinueButton onClick={() => navigate('/Android_Step03View')} />
    </>
  )
}

export default Android_Step02View