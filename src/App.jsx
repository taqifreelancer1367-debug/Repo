import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cards from './components/Cards'
import Diff from './components/Diff'
import Nav from './components/nav'
import Home from './components/routes/Home'
import About from './components/routes/About'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Nav />
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App