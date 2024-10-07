import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import ProgressBar from '../components/ProgressBar'
import CancelButton from '../components/CancelButton'
import FinalWidget from '../components/FinalWidget'
import CompleteButton from '../components/CompleteButton'

function FinalViewiOS() {
  const navigate = useNavigate()
  return (
    <>
      <ProgressBar progress={11}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/iOS_Step08View')}/>
        <h1 className='headline mb-150 mt-50'>Congratulations!</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>
      <h1 className='text-medium mb-150'>You performed an important and major security action!</h1>
      <FinalWidget widgetNumber={1}/>
      <FinalWidget widgetNumber={2}/>
      <FinalWidget widgetNumber={3}/>
      <FinalWidget widgetNumber={4}/>
      <CompleteButton onClick={() => navigate('/')} />
    </>
  )
}

export default FinalViewiOS