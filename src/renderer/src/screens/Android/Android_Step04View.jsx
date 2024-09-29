import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function Android_Step04View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>Android_Step04View</h1>
        <ContinueButton onClick={() => navigate('/Android_Step05View')} />
    </>
  )
}

export default Android_Step04View