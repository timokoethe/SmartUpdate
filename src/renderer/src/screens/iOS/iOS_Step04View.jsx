import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'

function IOS_Step04View() {
  const navigate = useNavigate()
  return (
    <>
      <ProgressBar progress={7}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/iOS_Step03View')}/>
        <h1 className='headline mb-150 mt-50'>2. Enable Automatic Update</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='spacer px-100'>
        <p className='text-medium'>1. Go to <i>Automatic Updates</i>.</p>
      </div>

      <ContinueButton onClick={() => navigate('/iOS_Step05View')} />
    </>
  )
}

export default IOS_Step04View