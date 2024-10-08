function InfoOverlay({overlayNumber, isVisible, onClose}) {
  if (!isVisible) return null
  const getContentForNumber = (overlayNumber) => {
    switch (overlayNumber) {
      case 1:
        return { headline: 'What is this?',
              text: 'This application offers you a quick and simple step by step guide on how to update your phone manually and how to enable the automatic update function.' }
      case 2:
        return { headline: 'What platform do I have?',
          text: 'Turn your phone backwards. Look for an icon. If you find an apple like icon, your phone is an apple device. If you don\'t find any icon, choose Android.'}
      case 3:
        return { headline: 'How to find the Settings App?',
          text: 'Look for the gear icon. Swipe down shortly from the top half of your screen. A searchbar appears. Type in \'Settings\' and choose the first result.'}
      case 4:
        return { text: 'Ensured compatibility with other systems'}
      }
  };
  const { headline, text } = getContentForNumber(overlayNumber);

  return (
    <div className='infoOverlayScreen'>
              <div className='infoOverlay'>
        <div className='infoOverlayHeaderContainer'>
            <div className='infoOverlayHeadlineContainer'>
                <h1 className='infoOverlayHeadline'>{headline}</h1>
            </div>
            <button className='infoOverlayCloseButton' onClick={onClose}/>
        </div>
        <p className='infoOverlayText px-50'>{text}</p>
      </div>
    </div>
  )
}

export default InfoOverlay