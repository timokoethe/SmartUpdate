function Picker({ onClick, withQRCode, os }) {
  const handleClick = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveAppleStamp', timeStamp)
    onClick()
  }

  if (os === 'iOS') {
    return (
      <button className={`${withQRCode ? 'applePickerWithQRCode' : 'applePicker'}`} onClick={handleClick} />
    )
  } else if (os === 'Android') {
    return (
      <button className={`${withQRCode ? 'androidPickerWithQRCode' : 'androidPicker'}`} onClick={handleClick} />
    )
  }
}

export default Picker