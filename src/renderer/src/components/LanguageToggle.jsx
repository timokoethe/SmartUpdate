import { useState } from 'react'
import { useLanguage } from '../LanguageContext'

function LanguageToggle() {
  const { changeLanguage, language } = useLanguage()
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveLanguageStamp', timeStamp)
    changeLanguage()
  }
  return (
		/*
	    <div class="switch">
	        <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox" />
	        <label for="language-toggle"></label>
	        <span class="on">DE</span>
	        <span class="off">EN</span>
  	    </div>
		*/
		<div>
			<button class="languageToggle" onClick={handleClick}>{language === 'en' ? 'DE' : 'EN'}</button>
		</div>
  )
}

export default LanguageToggle