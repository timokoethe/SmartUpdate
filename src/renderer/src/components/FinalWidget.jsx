import { useState } from 'react'
import icon from '../assets/icons/CheckIcon.png'

function FinalWidget({widgetNumber}) {
  const getContentForNumber = (widgetNumber) => {
    switch (widgetNumber) {
      case 1:
        return { text: 'Fixed possible security vulnerabilities'}
      case 2:
        return { text: 'Improved features and functinality'}
      case 3:
        return { text: 'Fixed possible bugs'}
      case 4:
        return { text: 'Ensured compatibility with other systems'}
      }
  };

  const { text } = getContentForNumber(widgetNumber);


  return (
      <div className='finalWidget mb-100'>
        <div className='finalWidgetContainer'>
          <img src={icon} className='finalWidgetIcon mx-100' />
          <p className='finalWidgetText'>{text}</p>
        </div>
      </div>
  )
}

export default FinalWidget