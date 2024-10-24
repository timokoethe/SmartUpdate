import { useState } from 'react'

function AndroidPicker({ onClick, withQRCode }) {
  return (
      <button className={`${withQRCode ? 'androidPickerWithQRCode' : 'androidPicker'}`} onClick={onClick}/>
  )
}

export default AndroidPicker