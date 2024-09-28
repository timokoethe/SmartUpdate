import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import EntryView from './screens/EntryView'
import InfoView from './screens/InfoView'
import ProgressBar from './components/ProgressBar'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
    <ProgressBar progress={9}/>
      <HashRouter>
        <Routes>
          <Route path="/" element={<EntryView />} />
          <Route path="/info" element={<InfoView />} />
        </Routes>
      </HashRouter>
    </>

  )
}

export default App

