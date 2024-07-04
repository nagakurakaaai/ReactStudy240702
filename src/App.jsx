import Header from './common/Header.jsx'
import KeyVisual from './KeyVisual.jsx'
import About from './About.jsx'
import Speaker from './Speaker.jsx'
import Session from './Session.jsx'
import Resistor from './Resistor.jsx'
import Hooter from './Hooter.jsx'
import UpButton from './common/UpButton.jsx'

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <KeyVisual />
        <main className="content">
          <About />
          <Speaker />
          <Session />
          <Resistor />
        </main>
        <Hooter />
        <UpButton />
      </div>
    </>
  )
}

export default App
