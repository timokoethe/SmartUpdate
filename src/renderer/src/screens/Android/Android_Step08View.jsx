import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'

function Android_Step08View() {
  const navigate = useNavigate()
  return (
    <>
        <ProgressBar progress={11}/>
        <h1 className='headline'>3. Search for Updates</h1>
        <InfoButton />
        <CancelButton onClick={() => navigate('/')}/>
        <BackButton onClick={() => navigate('/Android_Step07View')}/>
        <ContinueButton onClick={() => navigate('/CelebrationView')} />
    </>
  )
}

export default Android_Step08View