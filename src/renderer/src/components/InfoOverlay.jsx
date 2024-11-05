import { useLocalization } from '../LanguageContext'

function InfoOverlay({overlayNumber, isVisible, onClose}) {
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveInfoCloseStamp', timeStamp)
    onClose()
  }
  const loc = useLocalization()
  if (!isVisible) return null
  const getContentForNumber = (overlayNumber) => {
    switch (overlayNumber) {
      case 1:
        return { headline: loc.infoOverlayHeadline01,
          text: loc.infoOverlayText01,
          position: 'left' }
      case 2:
        return { headline: loc.infoOverlayHeadline02,
          text: loc.infoOverlayText02,
          position: 'left' }
      case 3:
        return { headline: loc.infoOverlayHeadline03,
          text: loc.infoOverlayText03,
          position: 'right' }
      case 4:
        return { headline: loc.infoOverlayHeadline04,
          text: loc.infoOverlayText04,
          position: 'right' }
      case 5:
        return { headline: loc.infoOverlayHeadline05,
          text: loc.infoOverlayText05,
          position: 'right' }
      case 6:
        return { headline: loc.infoOverlayHeadline06,
          text: loc.infoOverlayText06,
          position: 'right' }
      case 7:
        return { headline: loc.infoOverlayHeadline07,
          text: loc.infoOverlayText07,
          position: 'right' }
      case 8:
        return { headline: loc.infoOverlayHeadline08,
          text: loc.infoOverlayText08,
          position: 'right' }
      case 9:
        return { headline: loc.infoOverlayHeadline09,
          text: loc.infoOverlayText09,
          position: 'right' }
      case 10:
        return { headline: loc.infoOverlayHeadline10,
          text: loc.infoOverlayText10,
          position: 'right' }
        }
  };
  const { headline, text, position } = getContentForNumber(overlayNumber);

  return (
    <div className='infoOverlayScreen'>
      <div className={`infoOverlay ${position == 'left' ? 'ml-100 mt-100' : 'infoOverlayRight mr-100 mt-450'}`}>
        <div className='infoOverlayHeaderContainer'>
          <div className='infoOverlayHeadlineContainer'>
            <h1 className='infoOverlayHeadline'>{headline}</h1>
          </div>
          <button className='infoOverlayCloseButton' onClick={handleClick}/>
        </div>
        <p className='infoOverlayText px-50'>{text}</p>
      </div>
    </div>
  )
}

export default InfoOverlay