
import { useState } from 'react'
import ApplePicker from '../components/ApplePicker'
import AndroidPicker from '../components/AndroidPicker'
import { useNavigate } from 'react-router-dom'

function PickerView() {
  const navigate = useNavigate()
  return (
    <>
        <h1>PickerView</h1>
        <AndroidPicker onClick={() => navigate('/Android_Step01View')}/>
    </>
  )
}

export default PickerView