import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function IOS_Step07View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>iOS_Step07View</h1>
        <ContinueButton onClick={() => navigate('/IOS_Step08View')} />
    </>
  )
}

export default IOS_Step07View