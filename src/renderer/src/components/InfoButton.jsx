import { useState } from 'react'

function InfoButton({ onClick, theme }) {
  const iconStyle = theme === 'dark' ? 'infoIconDark' : 'infoIconLight'

  return (
      <button className={`infoButton ${iconStyle}`} onClick={onClick} />
  )
}

export default InfoButton