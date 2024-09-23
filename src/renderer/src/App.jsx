import ContinueButton from './components/ContinueButton'
import Versions from './components/Versions'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <h1>SmartUpdate</h1>
      <ContinueButton></ContinueButton>
      <Versions></Versions>
    </>
  )
}

export default App

