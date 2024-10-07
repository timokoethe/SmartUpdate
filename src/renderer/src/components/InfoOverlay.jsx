function InfoOverlay({overlayNumber, isVisible, onClose}) {
  if (!isVisible) return null
  const getContentForNumber = (overlayNumber) => {
    switch (overlayNumber) {
      case 1:
        return { headline: 'What is this?',
              text: 'This application offers you a quick and simple step by step guide on how to update your phone manually and how to enable the automatic update function.' }
      case 2:
        return { text: 'Improved features and functinality'}
      case 3:
        return { text: 'Fixed possible bugs'}
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