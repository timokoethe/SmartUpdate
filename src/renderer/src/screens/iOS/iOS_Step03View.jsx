import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function IOS_Step03View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>iOS_Step03View</h1>
        <ContinueButton onClick={() => navigate('/IOS_Step04View')} />
    </>
  )
}

export default IOS_Step03View