import { useState } from 'react'

function ContinueButton({ onClick }) {
  return (
      <button className='continueButton' onClick={onClick} >
        <p>Continue</p>
      </button>
  )
}

export default ContinueButton