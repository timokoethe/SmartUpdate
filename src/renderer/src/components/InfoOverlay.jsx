function InfoOverlay({overlayNumber, isVisible, onClose}) {
  if (!isVisible) return null
  const getContentForNumber = (overlayNumber) => {
    switch (overlayNumber) {
      case 1:
        return { headline: 'What is this?',
              text: 'This application offers you a quick and simple step by step guide on how to update your phone manually and how to enable the automatic update function.' }
      case 2:
        return { headline: 'What platform do I have?',
          text: 'Turn your phone backwards. Look for an icon. If you find an apple like icon, your phone is an apple device. If you don\'t find any icon, choose Android.' }
      case 3:
        return { headline: 'How to find the Settings App?',
          text: 'Look for the gear icon. Swipe down shortly from the top half of your screen. A searchbar appears. Type in \'Settings\' and choose the first result.' }
      case 4:
        return { headline: 'How to find System and updates?',
          text: 'Below the headline a search bar is placed. Type in System & updates and choose the first result.' }
      case 5:
        return { headline: 'How to find Software update?',
          text: 'This option is always in first place in the list.' }
      case 6:
        return { headline: 'Error on Search for Update?',
          text: 'Make sure your device is connected to the Wi-Fi. Swipe down to force a new search. A progress wheel will appear.' }
      case 7:
        return { headline: 'No Update option appears',
          text: 'It seems like your phone is already up-to-date.' }
      case 8:
        return { headline: 'A long text appears?',
          text: 'This is LEGAL (Licensed Application End User License Agreement). Sometimes you just have to accept it by clicking the button \'Accept\'.' }
      case 9:
        return { headline: 'How to find General?',
          text: 'If you scroll to the top and swipe down a bit a search bar appears. Type in \'General\' and choose the first result.' }
      case 10:
        return { headline: 'How to find Software Update?',
          text: 'This option is always in second place in the list.' }
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