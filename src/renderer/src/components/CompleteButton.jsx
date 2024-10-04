import { useState } from 'react'

function CompleteButton({ onClick }) {
  return (
      <button className='completeButton' onClick={onClick} >
        <p>Complete</p>
      </button>
  )
}

export default CompleteButton