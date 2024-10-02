
import { useState } from 'react'
import ApplePicker from '../components/ApplePicker'
import AndroidPicker from '../components/AndroidPicker'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../components/InfoButton'
import CancelButton from '../components/CancelButton'
import ProgressBar from '../components/ProgressBar'

function PickerView() {
  const navigate = useNavigate()
  return (
    <>
        <ProgressBar progress={3}/>
        <InfoButton />
        <CancelButton  onClick={() => navigate('/')}/>
        <h1 className='headline'>1. Choose Platform</h1>
        <AndroidPicker onClick={() => navigate('/Android_Step01View')}/>
        <ApplePicker onClick={() => navigate('/IOS_Step01View')}/>
    </>
  )
}

export default PickerView