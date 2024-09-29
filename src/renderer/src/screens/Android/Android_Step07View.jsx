import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function Android_Step07View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>Android_Step07View</h1>
        <ContinueButton onClick={() => navigate('/Android_Step08View')} />
    </>
  )
}

export default Android_Step07View