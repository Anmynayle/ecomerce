import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Headers from './Headers'
import './Layout.css'
import { useState } from 'react'
import Cart from './Cart'

const Layoud = ({searchProduct, setSearchProduct, counter}) => {

  const [sidenBarHidden, setSidenBarHidden] = useState(false)
  const [cartHidden, setCartHidden] = useState(true)

  // console.log(sidenBarHidden)
  return (
    <div className='layout'>
        <Headers  cartHidden={cartHidden} setCartHidden={setCartHidden} sidenBarHidden={sidenBarHidden} setSidenBarHidden={setSidenBarHidden}/>
        <SideBar sidenBarHidden={sidenBarHidden} setSidenBarHidden={setSidenBarHidden}
                  searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>
        <Cart counter={counter} cartHidden={cartHidden} setCartHidden={setCartHidden} />
        <div className="main">
          
        <Outlet/>
        </div>
    </div>
  )
}

export default Layoud