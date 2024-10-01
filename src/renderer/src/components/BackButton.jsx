import { useState } from 'react'

function BackButton({ onClick}) {
  return (
      <button className='backButton' onClick={onClick}/>
  )
}

export default BackButton