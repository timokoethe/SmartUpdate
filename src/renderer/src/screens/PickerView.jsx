
import { useState } from 'react'
import ApplePicker from '../components/ApplePicker'
import AndroidPicker from '../components/AndroidPicker'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../components/InfoButton'
import CancelButton from '../components/CancelButton'

function PickerView() {
  const navigate = useNavigate()
  return (
    <>
        <h1>PickerView</h1>
        <InfoButton />
        <CancelButton  onClick={() => navigate('/')}/>
        <AndroidPicker onClick={() => navigate('/Android_Step01View')}/>
        <ApplePicker onClick={() => navigate('/IOS_Step01View')}/>
    </>
  )
}

export default PickerView