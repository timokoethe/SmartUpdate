
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
      <div className='spacer px-100 mt-50'>
        <InfoButton />
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <h1 className='headline'>1. Choose Platform</h1>
      <div>
        <p className='text mx-80 leading'>Mobile phones offer us a function to perforam updates automatically.<br/>
          In the following we will show you how to activate this and also how to perform an update manually.
        </p>
        <p className='text mx-80 leading my-100'>Grab your phone and try this simultaneously on your own!</p>
      </div>
      <p className='text mt-100'>Please choose your platform:</p>
      <div className='spacer mt-100 px-200'>
        <AndroidPicker onClick={() => navigate('/Android_Step01View')} />
        <ApplePicker onClick={() => navigate('/IOS_Step01View')} />
      </div>
    </>
  )
}

export default PickerView