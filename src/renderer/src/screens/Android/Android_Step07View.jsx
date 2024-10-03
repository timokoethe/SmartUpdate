import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar'

function Android_Step07View() {
  const navigate = useNavigate()
  return (
    <>
      <ProgressBar progress={10}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/Android_Step06View')}/>
        <h1 className='headline mb-150 mt-50'>3. Search for Updates</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='spacer px-100'>
        <p className='text-medium' style={{width: '70vw'}}>1. Once you have enabled the Automatic Update 
          function, go one step back to the <i>Software update</i> tab. Your phone
          starts searching for updates.</p>
        <InfoButton />
      </div>
      <div className='spacer px-100'>
        <p className='text-medium' style={{width: '70vw'}}>2. If an update is available, it is displayed
          as on the right, otherwise nothing appears and you are up-to-date.
        </p>
      </div>

      <ContinueButton onClick={() => navigate('/Android_Step08View')} />
    </>
  )
}

export default Android_Step07View