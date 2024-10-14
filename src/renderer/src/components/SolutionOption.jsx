import { useState } from 'react'

function SolutionOption({optionNumber}) {
  const isRight = optionNumber === 1 || optionNumber === 5
  const getContentForNumber = (optionNumber) => {
    switch (optionNumber) {
      case 1:
        return { text: 'to fix security vulnearbilities', 
            subtext: 'Updates fix security vulnerabilities that have arisen to offer you the safes experience.' }
      case 2:
        return { text: 'to increase hardware wear and tear',
            subtext: 'Updates have nothing to do with hardware wear and tear. They only affect the software.' }
      case 3:
        return { text: 'to reduce free memory',
            subtext: 'Updates acutally need free memory but they fee up memory from old updates after installation.' }
      case 4:
        return { text: 'to decrease battery life',
            subtext: 'Updates have little to no influence on battery life. On the contrary, sometimes they even increase it.' }
      case 5:
        return { text: 'to improve features and functionality',
            subtext: 'Updates often bring new features to always offer the best experience. In addition they fix known bugs.' }
      }
  }
  const { text, subtext } = getContentForNumber(optionNumber);

  return (
      <div className={`solutionOptionWidget ${isRight ? 'solutionOptionWidgetCorrect' : ''}`}>
        <div className='solutionOptionWidgetContainer'>
            <div className={`solutionOptionCheckBox ${isRight ? 'solutionOptionCheckBoxCorrect' : ''}`} />
            <p className='text-medium'>{text}</p>
        </div>
        <p className='solutionOptionSubText'>{subtext}</p>
      </div>
  )
}

export default SolutionOption