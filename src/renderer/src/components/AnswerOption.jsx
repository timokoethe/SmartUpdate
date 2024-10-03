import { useState } from 'react'

function AnswerOption({optionNumber, clickable}) {
  const isRight = optionNumber === 1 || optionNumber === 5
  const [isSelected, setIsSelected] = useState(false)
  const handleClick = () => {
    if (clickable) {
      setIsSelected(!isSelected)
    }
  }
  const getContentForNumber = (optionNumber) => {
    switch (optionNumber) {
      case 1:
        return { text: 'to fix security vulnearbilities' }
      case 2:
        return { text: 'to increase hardware wear and tear' }
      case 3:
        return { text: 'to reduce free memory' }
      case 4:
        return { text: 'to decrease battery life' }
      case 5:
        return { text: 'to improve features and functionality' }
      }
  }
  const { text } = getContentForNumber(optionNumber);



  return (
      <div className={`answerOption 
                    ${isSelected ? 'answerOptionSelected' : ''}
                    ${clickable || !isRight ? '' : 'answerOptionSolution'}`} onClick={handleClick} >
        <div className={`answerOptionCheckBox 
                    ${isSelected ? 'answerOptionCheckBoxSelected' : ''}
                    ${clickable || !isRight ? '' : 'answerOptionCheckBoxSolution'}`} />
        <p className='text-medium'>{text}</p>
      </div>
  )
}

export default AnswerOption