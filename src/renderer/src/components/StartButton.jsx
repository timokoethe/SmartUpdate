import { useState } from 'react'

function StartButton({ onClick }) {
  return (
    <button className='startButton' onClick={onClick} >
      <p>TAP <br/>TO START</p>
    </button>
  )
}

export default StartButton