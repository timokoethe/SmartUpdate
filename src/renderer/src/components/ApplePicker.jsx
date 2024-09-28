import { useState } from 'react'

function ApplePicker({ onClick }) {
  return (
      <button className='applePicker' onClick={onClick} />
  )
}

export default ApplePicker