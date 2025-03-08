import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Infocard from './components/Infocard'
import Forward from './Forward'
import Backward from './Backward'
import Endpage from './Endpage'
import Congrats from './Congrats'
import Anbefaling1 from './Anbefaling1'
import Anbefaling2 from './Anbefaling2'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Infocard />} />
        <Route path="/hvad-skal-jeg-spille" element={<Forward />} />
        <Route path="/passer-spillet-dig" element={<Backward />} />
        <Route path="/endpage" element={<Endpage />} />
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/Anbefaling1" element={<Anbefaling1 />} />
        <Route path="/Anbefaling2" element={<Anbefaling2 />} />
      </Routes>
    </Router>
  )
}

export default App
