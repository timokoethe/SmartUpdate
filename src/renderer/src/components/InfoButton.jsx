import { useState } from 'react'

function InfoButton({ onClick }) {
  return (
      <button className='infoButton' onClick={onClick} />
  )
}

export default InfoButton