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
  const [searchProduct, setSearchProduct] = useState()


  return (
    <div className='App'>
     
      <Routes>
      <Route element={<Layout searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>}/>
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
