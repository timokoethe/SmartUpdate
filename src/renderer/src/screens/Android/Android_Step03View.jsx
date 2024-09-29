import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function Android_Step03View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>Android_Step03View</h1>
        <ContinueButton onClick={() => navigate('/Android_Step04View')} />
    </>
  )
}

export default Android_Step03View