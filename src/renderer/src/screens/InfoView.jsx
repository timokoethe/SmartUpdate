import { useLocalization } from '../LanguageContext'
import ContinueButton from '../components/ContinueButton'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import AnswerOption from '../components/AnswerOption'
import BottomDesign from '../components/BottomDesign'
import BottomFont from '../components/BottomFont'
import inactivityTimer from '../components/Timer'
import InfoButton from '../components/InfoButton'
import CancelButton from '../components/CancelButton'
import { useState } from 'react'
import React from 'react'

function InfoView({ navigateToSolution }) {
  const loc = useLocalization()
  inactivityTimer()
  const navigate = useNavigate()

  
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleOptionClick = (optionNumber) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(optionNumber)) {
        const updatedOptions = prevSelectedOptions.filter((answer) => answer !== optionNumber)
        return updatedOptions
      } else {
        const updatedOptions = [...prevSelectedOptions, optionNumber]
        return updatedOptions
      }
    })
  }

  const handleContinue = () => {
    navigateToSolution(selectedOptions)
  }

  return (
    <>
      <ProgressBar progress={1} />
      <div className='spacer px-100 mt-50' style={{alignItems: 'flex-start'}}>
        <InfoButton theme={'light'} />
        <h1 className='headline mt-100'>{loc.infoViewHeadline}</h1>
        <CancelButton  onClick={() => navigate('/')}/>
      </div>
      <div className='fullWidth px-80 my-150'>
        <p className='text leading'>{loc.infoViewText01}</p>
        <p className='text-small leading'>{loc.infoViewText02}</p>
      </div>

      <AnswerOption optionNumber={1} clickable={true} onClick={() => handleOptionClick('A')}/>
      <AnswerOption optionNumber={2} clickable={true} onClick={() => handleOptionClick('B')}/>
      <AnswerOption optionNumber={3} clickable={true} onClick={() => handleOptionClick('C')}/>
      <AnswerOption optionNumber={4} clickable={true} onClick={() => handleOptionClick('D')}/>
      <AnswerOption optionNumber={5} clickable={true} onClick={() => handleOptionClick('E')}/>

      <div className='continueButtonContainerBottom center'>
        <ContinueButton onClick={handleContinue} disabled={selectedOptions.length == 0}/>
      </div>
      <BottomDesign />
      <BottomFont />
    </>
  )
}

export default InfoView