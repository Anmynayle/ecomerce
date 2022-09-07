import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Routes/Home'
import ProductDetail from './components/Routes/ProductDetail'
import Login from './components/Routes/Login'
import Purshase from './components/Routes/Purshase'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
import Layout from './components/Routes/share/Layout'
import Cart from './components/Routes/share/Cart'


function App() {
  
  const [searchProduct, setSearchProduct] = useState()
  

  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   // const obj = {
  //   //   firstName: 'ambar',
  //   //   lastName: 'aguilar',
  //   //   email: 'nayle27@gmail.com',
  //   //   password: '2704Amb',
  //   //   phone: '1234568795',
  //   //   role: 'admin'
  //   // }
  //   // axios.post(URL, obj)
  //   //   .then(res => console.log(res.data))
  //   //   .catch(err => console.log(err))
  // }, [])

  

  return (
    <div className='App'>
     
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route element={<Layout searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>}>
        <Route path='/' element={<Home searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
      </Route>
      <Route element={<ProtectedRoutes />}>
          <Route element={<Layout  searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>}>
          <Route path='/purshase' element={<Purshase />} />
          {/* <Route path='/cart' element={<Cart />} /> */}
      </Route>
      </Route>
    </Routes>
    </div>
    
  )
}

export default App
