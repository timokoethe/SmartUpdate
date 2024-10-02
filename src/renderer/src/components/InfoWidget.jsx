import { useState } from 'react'
import UpdateIcon from '../assets/icons/UpdateIcon.png'
import PowerIcon from '../assets/icons/PowerIcon.png'
import ShieldIcon from '../assets/icons/ShieldIcon.png'

function InfoWidget({widgetNumber}) {
  const getContentForNumber = (widgetNumber) => {
    switch (widgetNumber) {
      case 1:
        return { headline: 'Keep Your Phone Up-to-Date', 
          text: 'Learn how to update your phone\'s operating system and why it is so important in under 120 seconds!',
          icon: UpdateIcon }
      case 2:
        return { headline: 'Keep Your Phone Up-to-Date', 
          text: 'Updates often include optimizations that can help extend your phone\'s battery life.',
          icon: PowerIcon }
      case 3:
        return { headline: 'Keep Your Phone Up-to-Date', 
          text: 'Updating your phone ensures you have the latest security patches, protecting your data from vulnerabilities.',
          icon: ShieldIcon}
      }
  };

  const { headline, text, icon } = getContentForNumber(widgetNumber);


  return (
      <div className='infoWidget'>
        <div className='infoWidgetContainer'>
          <h1 className='infoWidgetHeadline'>{headline}</h1>
          <img src={icon} className='infoWidgetIcon' />
        </div>
        <p className='infoWidgetText'>{text}</p>
        <p className='infoWidgetText'>Do it with your own smartphone now!</p>
      </div>
  )
}

export default InfoWidget