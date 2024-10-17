import { useLocalization } from '../LanguageContext'
import icon from '../assets/icons/CheckIcon.png'

function FinalWidget({widgetNumber}) {
  const loc = useLocalization()

  const getContentForNumber = (widgetNumber) => {
    switch (widgetNumber) {
      case 1:
        return { text: loc.finalWidgetText01 }
      case 2:
        return { text: loc.finalWidgetText02 }
      case 3:
        return { text: loc.finalWidgetText03 }
      case 4:
        return { text: loc.finalWidgetText04 }
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