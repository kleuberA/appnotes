import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Notas from './Pages/Notas'
import CriarNotas from './Pages/CriarNotas'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/notas' element={<Notas/>}/>
        <Route path='/criarNota' element={<CriarNotas/>}/>
      </Routes>
    </div>
  )
}

export default App
