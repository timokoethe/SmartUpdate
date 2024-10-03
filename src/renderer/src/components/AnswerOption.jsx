import { useState } from 'react'

function AnswerOption({optionNumber}) {
  const [isSelected, setIsSelected] = useState(false)
  const handleClick = () => {
    setIsSelected(!isSelected)
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
      <div className={`answerOption ${isSelected ? 'answerOptionSelected' : ''}`} onClick={handleClick} >
        <div className={`answerOptionCheckBox ${isSelected ? 'answerOptionCheckBoxSelected' : ''}`} />
        <p className='text-medium'>{text}</p>
      </div>
  )
}

export default AnswerOption