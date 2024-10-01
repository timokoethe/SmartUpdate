import { useState } from 'react'

function CancelButton({ onClick }) {
  return (
      <button className='cancelButton' onClick={onClick}/>
  )
}

export default CancelButton