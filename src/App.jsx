import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Routes/Home'
import ProductDetail from './components/Routes/ProductDetail'
import Login from './components/Routes/Login'
import Purshase from './components/Routes/purshases/Purshase'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
import Layout from './components/Routes/share/Layout'
import Cart from './components/Routes/share/Cart'
import { useDispatch } from 'react-redux'
import {getAllProduct} from './store/slice/product.slice'
import Register from './components/login/Register'


function App() {
  
  const [searchProduct, setSearchProduct] = useState('')
  const [filterProduts, setFilterProduts] = useState()
  const [counter, setCounter] = useState(0)
  
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProduct())
}, [])
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
        <Route path='/register' element={<Register/>}/>
        <Route element={<Layout counter={counter} searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>}>
        <Route path='/' element={<Home filterProduts={filterProduts} setFilterProduts={setFilterProduts} setCounter={setCounter} searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>}/>
        <Route path='/product/:id' element={<ProductDetail setCounter={setCounter} />}/>
      </Route>
      <Route element={<ProtectedRoutes />}>
          <Route element={<Layout counter={counter} searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>}>
          <Route path='/purshase' element={<Purshase />} />
          {/* <Route path='/cart' element={<Cart />} /> */}
      </Route>
      </Route>
    </Routes>
    </div>
    
  )
}

export default App
