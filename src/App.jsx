import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Routes/Home'
import ProductDetail from './components/Routes/ProductDetail'
import Login from './components/Routes/Login'
import Purshase from './components/Routes/Purshase'
import { NavLink } from 'react-router-dom'
import Headers from './components/Routes/share/Headers'
import ProtectedRoutes from './components/Routes/share/ProtectedRoutes'
import Layout from './components/Routes/share/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
     
      <Routes>
      <Route element={<Layout />}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
      </Route>
      <Route element={<ProtectedRoutes />}>
          <Route element={<Layout/>}>
          <Route path='/purshase' element={<Purshase />} />
          </Route>
      </Route>

    </Routes>
    </div>
    
  )
}

export default App
