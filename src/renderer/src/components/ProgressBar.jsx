import { useState } from 'react'

function ProgressBar({ progress = 9}) {
  const width = progress*9.2
  return (
      <div className='progressContainer'>
        <div className='progressBar' style={{ width: `${width}vw`}}>
        </div>
      </div>
  )
}

export default ProgressBar