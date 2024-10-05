function InfoOverlay({overlayNumber, isVisible, onClose}) {
  if (!isVisible) return null
  const getContentForNumber = (overlayNumber) => {
    switch (overlayNumber) {
      case 1:
        return { text: 'Fixed possible security vulnerabilities'}
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
      <div>
        <p className='text'>{text}</p>
        <button onClick={onClose}>Close</button>
      </div>
  )
}

export default InfoOverlay