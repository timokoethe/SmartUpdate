import { useState } from 'react'

function ProgressBar({ progress = 9}) {
  return (
      <div className='progressContainer'>
        <div className='progressBar' style={{ width: `${progress}vw`}}>
        </div>
      </div>
  )
}

export default ProgressBar