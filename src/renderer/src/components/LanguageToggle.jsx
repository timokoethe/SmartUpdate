import { useLanguage } from '../LanguageContext'

function LanguageToggle() {
  const { changeLanguage, language } = useLanguage()
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveLanguageStamp', timeStamp)
    changeLanguage()
  }
  return (
	<button className='languageToggleButton' onClick={handleClick}>
	  <div className='languageToggleContainer'>
		<p className={`languageToggleText ${language === 'de' ? 'languageToggleTextChosen' : ''}`}>DE</p>
		<p className={`languageToggleText ${language === 'en' ? 'languageToggleTextChosen' : ''}`}>EN</p>
	  </div>
	</button>
  )
}

export default LanguageToggle