import { useNavigate } from 'react-router-dom'
import WifiWarning from '../../components/WifiWarning'
import inactivityTimer from '../../components/Timer'

function Samsung_WarningView() {
  inactivityTimer()
  const navigate = useNavigate()
  return (
    <>
    <div className='fullBackgroundBlur'>
    <div className='wifiWarningView'>
        <WifiWarning onClick={() => navigate('/Samsung_Step06View')} />
      </div>
    </div>

    </>
  )
}

export default Samsung_WarningView