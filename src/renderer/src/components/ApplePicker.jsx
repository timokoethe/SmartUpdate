import { useState } from 'react'

function ApplePicker({ onClick, withQRCode }) {
  return (
      <button className={`${withQRCode ? 'applePickerWithQRCode' : 'applePicker'}`} onClick={onClick} />
  )
}

export default ApplePicker