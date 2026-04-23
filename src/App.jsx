import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cards from './components/Cards'
import Diff from './components/Diff'
import Nav from './components/nav'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
    <Nav />

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App