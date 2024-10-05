function InfoOverlay({overlayNumber, isVisible, onClose}) {
  if (!isVisible) return null
  const getContentForNumber = (overlayNumber) => {
    switch (overlayNumber) {
      case 1:
        return { text: '- Turn your phone backwards.'}
      case 2:
        return { text: 'Improved features and functinality'}
      case 3:
        return { text: 'Fixed possible bugs'}
      case 4:
        return { text: 'Ensured compatibility with other systems'}
      }
  };
  const { text } = getContentForNumber(overlayNumber);

  return (
    <div className='infoOverlayScreen'>
              <div className='infoOverlay'>
        <div className='infoOverlayHeaderContainer'>
            <div className='infoOverlayHeadlineContainer'>
                <h1 className='infoOverlayHeadline'>What platform do I have?</h1>
            </div>
            <button className='infoOverlayCloseButton' onClick={onClose}/>
        </div>
        <p className='infoOverlayText'>{text}</p>
      </div>
    </div>

  )
}

export default InfoOverlay