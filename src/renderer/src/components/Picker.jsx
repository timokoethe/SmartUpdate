function Picker({ onClick, withQRCode, os }) {
  const handleClickApple = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveAppleStamp', timeStamp)
    onClick()
  }

  const handleClickAndroid = () => {
    const timeStamp = new Date().toISOString()
    window.electron.ipcRenderer.send('saveAndroidPickerStamp', timeStamp)
    onClick()
  }

  if (os === 'iOS') {
    return (
      <button className={`${withQRCode ? 'applePickerWithQRCode' : 'applePicker'}`} onClick={handleClickApple} />
    )
  } else if (os === 'Android') {
    return (
      <button className={`${withQRCode ? 'androidPickerWithQRCode' : 'androidPicker'}`} onClick={handleClickAndroid} />
    )
  }
}

export default Picker