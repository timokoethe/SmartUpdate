import { useLocalization } from '../LanguageContext'

function CompleteButton({ onClick }) {
  const loc = useLocalization()
  return (
      <button className='completeButton' onClick={onClick} >
        <p>{loc.completeButton}</p>
      </button>
  )
}

export default CompleteButton