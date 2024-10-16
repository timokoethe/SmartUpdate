import { useState } from 'react'
import { useLanguage } from '../LanguageContext'

function LanguageToggle() {
  const { changeLanguage, language } = useLanguage()
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
			<button onClick={changeLanguage}>{language === 'en' ? 'Deutsch' : 'English'}</button>
		</div>
  )
}

export default LanguageToggle