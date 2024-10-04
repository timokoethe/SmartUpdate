import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'

function IOS_Step03View() {
  const navigate = useNavigate()
  return (
    <>
      <ProgressBar progress={6}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/iOS_Step02View')}/>
        <h1 className='headline mb-150 mt-50'>1. Find the Update Settings</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='spacer px-100'>
        <p className='text-medium'>1. Search for your Settings App.</p>
        <InfoButton />
      </div>
      <div className='spacer px-100'>
        <p className='text-medium'>2. Go to <i>General</i>.</p>
      </div>
      <div className='spacer px-100'>
        <p className='text-medium'>3. Go to <i>Software Update</i>.</p>
      </div>

      <ContinueButton onClick={() => navigate('/iOS_Step04View')} />
    </>
  )
}

export default IOS_Step03View