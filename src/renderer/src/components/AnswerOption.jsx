import { useState } from 'react'
import { useLocalization } from '../LanguageContext'

function AnswerOption({optionNumber, clickable, onClick}) {
  const loc = useLocalization()
  const isRight = optionNumber === 1 || optionNumber === 5
  const [isSelected, setIsSelected] = useState(false)
  const handleClick = () => {
    if (clickable) {
      setIsSelected(!isSelected)
    }
    onClick()
  }
  const getContentForNumber = (optionNumber) => {
    switch (optionNumber) {
      case 1:
        return { text: loc.answerOptionText01 }
      case 2:
        return { text: loc.answerOptionText02 }
      case 3:
        return { text: loc.answerOptionText03 }
      case 4:
        return { text: loc.answerOptionText04 }
      case 5:
        return { text: loc.answerOptionText05 }
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