import './App.css'

import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as CLogo } from './colorfulLogo.svg'
import Page from './components/pages/page.component'
import bgOne from './imgs/download.png'
import bgTwo from './imgs/bg2.jpg'

function App() {
  return (
    <div className="App">
      <Logo className="logo" />
      <div className="app-itemsContainer">
        <Page
          logo={<CLogo />}
          backgroundImg={bgOne}
          desc={
            <p>
              A modern day communications <br /> company.
            </p>
          }
          BtnText=""
          BtnLink=""
          textColor={'#fff'}
          first
        />
        <Page
          backgroundImg={bgTwo}
          desc={
            <p>
              A contemporary global creative and media agency built to drive
              business outcomes for our partners
            </p>
          }
          textColor={'#fff'}
        />
        <Page />
        <Page last />
      </div>
    </div>
  )
}

export default App
