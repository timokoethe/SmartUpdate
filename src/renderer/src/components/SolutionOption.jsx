import { useLocalization } from '../LanguageContext'

function SolutionOption({optionNumber, selected}) {
  const loc = useLocalization()
  const isRight = optionNumber === 1 || optionNumber === 5
  const getContentForNumber = (optionNumber) => {
    switch (optionNumber) {
      case 1:
        return { text: loc.solutionOptionText01, 
            subtext: loc.solutionOptionSubText01 }
      case 2:
        return { text: loc.solutionOptionText02,
            subtext: loc.solutionOptionSubText02 }
      case 3:
        return { text: loc.solutionOptionText03,
            subtext: loc.solutionOptionSubText03 }
      case 4:
        return { text: loc.solutionOptionText04,
            subtext: loc.solutionOptionSubText04 }
      case 5:
        return { text: loc.solutionOptionText05,
            subtext: loc.solutionOptionSubText05 }
      }
  }
  const { text, subtext } = getContentForNumber(optionNumber);

  return (
      <div className={`solutionOptionWidget ${isRight ? 'solutionOptionWidgetCorrect' : ''} ${selected && !isRight ? 'solutionOptionWidgetWrong' : ''}`}>
        <div className='solutionOptionWidgetContainer'>
            <div className={`solutionOptionCheckBox ${isRight ? 'solutionOptionCheckBoxCorrect' : ''} ${selected && !isRight ? 'solutionOptionCheckBoxWrong' : ''}`} />
            <p className='text-medium'>{text}</p>
        </div>
        <p className='solutionOptionSubText'>{subtext}</p>
      </div>
  )
}

export default SolutionOption