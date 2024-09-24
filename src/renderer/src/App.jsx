import EntryView from './screens/EntryView'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <EntryView />
    </>
  )
}

export default App

