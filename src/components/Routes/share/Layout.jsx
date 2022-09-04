import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Headers from './Headers'
import './Layout.css'
import { useState } from 'react'
const Layoud = ({searchProduct, setSearchProduct}) => {

  const [sidenBarHidden, setSidenBarHidden] = useState(false)

  // console.log(sidenBarHidden)
  return (
    <div className='layout'>
        <Headers  sidenBarHidden={sidenBarHidden} setSidenBarHidden={setSidenBarHidden}/>
        <SideBar sidenBarHidden={sidenBarHidden} setSidenBarHidden={setSidenBarHidden}
                  searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>
        <div className="main">
        <Outlet/>
        </div>
    </div>
  )
}

export default Layoud