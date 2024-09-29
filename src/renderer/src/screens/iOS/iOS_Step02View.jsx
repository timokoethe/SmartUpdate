import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function IOS_Step02View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>iOS_Step02View</h1>
        <ContinueButton onClick={() => navigate('/IOS_Step03View')} />
    </>
  )
}

export default IOS_Step02View