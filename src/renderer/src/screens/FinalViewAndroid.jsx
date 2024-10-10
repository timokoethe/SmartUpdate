import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import ProgressBar from '../components/ProgressBar'
import CancelButton from '../components/CancelButton'
import FinalWidget from '../components/FinalWidget'
import CompleteButton from '../components/CompleteButton'
import BottomDesign from '../components/BottomDesign'
import BottomFont from '../components/BottomFont'
import inactivityTimer from '../components/Timer'

function FinalViewAndroid() {
  inactivityTimer()
  const navigate = useNavigate()
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <ProgressBar progress={11}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/Android_Step08View')}/>
        <h1 className='headline mb-150 mt-50'>Congratulations!</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>
      <h1 className='text-medium mb-150'>You performed an important and major security action!</h1>
      <div className='enlarge'>
        <FinalWidget widgetNumber={1}/>
      </div>

      <div className='enlarge' style={{animationDelay: '0.5s'}}>
        <FinalWidget widgetNumber={2}/>
      </div>
      <div className='enlarge' style={{animationDelay: '1s'}}>
        <FinalWidget widgetNumber={3}/>
      </div>
      <div className='enlarge' style={{animationDelay: '1.5s'}}>
        <FinalWidget widgetNumber={4}/>
      </div>
      <div className='mt-100'>
        <CompleteButton onClick={() => navigate('/')} />
      </div>
      <BottomDesign />
      <BottomFont />
    </>
  )
}

export default FinalViewAndroid