import { useState } from 'react'

function LanguageToggle() {
  return (
	    <div class="switch">
	        <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox" />
	        <label for="language-toggle"></label>
	        <span class="on">DE</span>
	        <span class="off">EN</span>
  	    </div>
  )
}

export default LanguageToggle