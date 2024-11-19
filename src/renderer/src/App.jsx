import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import EntryView from './screens/EntryView'
import InfoView from './screens/InfoView'
import SolutionView from './screens/SolutionView'
import PickerView from './screens/PickerView'
import Android_Step01View from './screens/Android/Android_Step01View'
import Android_Step02View from './screens/Android/Android_Step02View'
import Android_Step03View from './screens/Android/Android_Step03View'
import Android_Step04View from './screens/Android/Android_Step04View'
import Android_Step05View from './screens/Android/Android_Step05View'
import Android_Step06View from './screens/Android/Android_Step06View'
import Android_Step07View from './screens/Android/Android_Step07View'
import Android_Step08View from './screens/Android/Android_Step08View'
import Android_WarningView from './screens/Android/Android_WarningView'
import IOS_Step01View from './screens/iOS/iOS_Step01View'
import IOS_Step02View from './screens/iOS/iOS_Step02View'
import IOS_Step03View from './screens/iOS/iOS_Step03View'
import IOS_Step04View from './screens/iOS/iOS_Step04View'
import IOS_Step05View from './screens/iOS/iOS_Step05View'
import IOS_Step06View from './screens/iOS/iOS_Step06View'
import IOS_Step07View from './screens/iOS/iOS_Step07View'
import IOS_Step08View from './screens/iOS/iOS_Step08View'
import IOS_WarningView from './screens/iOS/iOS_WarningView'
import FinalViewAndroid from './screens/FinalViewAndroid'
import FinalViewiOS from './screens/FinalViewiOS'
import CelebViewAndroid from './screens/CelebViewAndroid'
import CelebViewiOS from './screens/CelebViewiOS'
import { LanguageProvider } from './LanguageContext'
import QuizView from './screens/QuizView'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <LanguageProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<EntryView />} />
            <Route path="/InfoView" element={<InfoView />} />
            <Route path="/SolutionView" element={<SolutionView />} />
            <Route path="/QuizView" element={<QuizView />} />
            <Route path="/PickerView" element={<PickerView />} />
            <Route path="/Android_Step01View" element={<Android_Step01View withQRCode={false}/>} />
            <Route path="/Android_Step02View" element={<Android_Step02View withQRCode={false}/>} />
            <Route path="/Android_Step03View" element={<Android_Step03View withQRCode={false}/>} />
            <Route path="/Android_Step04View" element={<Android_Step04View />} />
            <Route path="/Android_Step05View" element={<Android_Step05View />} />
            <Route path="/Android_WarningView" element={<Android_WarningView />} />
            <Route path="/Android_Step06View" element={<Android_Step06View />} />
            <Route path="/Android_Step07View" element={<Android_Step07View />} />
            <Route path="/Android_Step08View" element={<Android_Step08View />} />

            <Route path="/IOS_Step01View" element={<IOS_Step01View withQRCode={true} />} />
            <Route path="/IOS_Step02View" element={<IOS_Step02View withQRCode={true}/>} />
            <Route path="/IOS_Step03View" element={<IOS_Step03View withQRCode={true}/>} />
            <Route path="/IOS_Step04View" element={<IOS_Step04View />} />
            <Route path="/IOS_Step05View" element={<IOS_Step05View />} />
            <Route path="/IOS_WarningView" element={<IOS_WarningView />} />
            <Route path="/IOS_Step06View" element={<IOS_Step06View />} />
            <Route path="/IOS_Step07View" element={<IOS_Step07View />} />
            <Route path="/IOS_Step08View" element={<IOS_Step08View />} />

            <Route path="/CelebViewAndroid" element={<CelebViewAndroid />} />
            <Route path="/CelebViewiOS" element={<CelebViewiOS />} />
            <Route path="/FinalViewAndroid" element={<FinalViewAndroid />} />
            <Route path="/FinalViewiOS" element={<FinalViewiOS />} />
          </Routes>
        </HashRouter>
      </LanguageProvider>
    </>
  )
}

export default App

