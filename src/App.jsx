import { Route, Routes } from 'react-router-dom'
import HomeLayout from './components/HomeLayout'
import MenuLayout from './components/MenuLayout'
import Home from './components/Home'
import History from './components/History'
import Team from './components/Team'

import './App.css'

function App() {

  return (
    
    <Routes>
      <Route path='/' element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route element={<MenuLayout/>}>
        <Route path='history' element={<History/>}/>
        <Route path='team' element={<Team/>}/>
      </Route>
    </Routes>
  )
}

export default App
