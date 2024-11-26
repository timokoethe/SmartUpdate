import { useState } from 'react'
import { useLocalization } from '../LanguageContext'
import UpdateIcon from '../assets/icons/UpdateIcon.png'
import PowerIcon from '../assets/icons/PowerIcon.png'
import ShieldIcon from '../assets/icons/ShieldIcon.png'

function InfoWidget({widgetNumber}) {
  const loc = useLocalization()
  const getContentForNumber = (widgetNumber) => {
    switch (widgetNumber) {
      case 1:
        return { headline: loc.infoWidgetHeadline, 
          text: loc.infoWidgetText01,
          icon: UpdateIcon }
      case 2:
        return { headline: loc.infoWidgetHeadline, 
          text: loc.infoWidgetText02,
          icon: PowerIcon }
      case 3:
        return { headline: loc.infoWidgetHeadline, 
          text: loc.infoWidgetText03,
          icon: ShieldIcon}
      }
  };

  const { headline, text, icon } = getContentForNumber(widgetNumber);


  return (
      <div className='infoWidget'>
          <div className='infoWidgetContainer'>
            <h1 className='infoWidgetHeadline'>{headline}</h1>
            <p className='infoWidgetText'>{text}</p>
            <p className='infoWidgetSubText'>{loc.infoWidgetSubText}</p>
          </div>
          <img src={icon} className='infoWidgetIcon' />
      </div>
  )
}

export default InfoWidget