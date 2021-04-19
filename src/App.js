import './App.css'
import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as CLogo } from './colorfulLogo.svg'

function App() {
  return (
    <div className="App">
      <Logo className="logo" />
      <CLogo />
    </div>
  )
}

export default App
