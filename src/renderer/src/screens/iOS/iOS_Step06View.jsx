import { useState } from 'react'
import ContinueButton from '../../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import InfoButton from '../../components/InfoButton'
import CancelButton from '../../components/CancelButton'
import BackButton from '../../components/BackButton'
import ProgressBar from '../../components/ProgressBar' 

function IOS_Step06View() {
  const navigate = useNavigate()
  return (
    <>
      <ProgressBar progress={9}/>
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <BackButton onClick={() => navigate('/iOS_Step05View')}/>
        <h1 className='headline mb-150 mt-50'>3. Search for Updates</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>

      <div className='spacer px-100'>
        <p className='text-medium' style={{width: '70vw'}}>1. Once you have enabled the Automatic Update 
          function, go one step back to the <i>Software update</i> tab. Your phone
          starts searching for updates.</p>
        <InfoButton />
      </div>

      <ContinueButton onClick={() => navigate('/iOS_Step07View')} />
    </>
  )
}

export default IOS_Step06View