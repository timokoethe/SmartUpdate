import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'

function IOS_Step06View() {
  const navigate = useNavigate()
  return (
    <>
        <h1>iOS_Step06View</h1>
        <ContinueButton onClick={() => navigate('/IOS_Step07View')} />
    </>
  )
}

export default IOS_Step06View