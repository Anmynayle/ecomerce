import React from 'react'
import FilterPrice from '../FilterPrice'
import  './SideBar.css'

const SideBar = ({setSidenBarHidden, sidenBarHidden,searchProduct, setSearchProduct}) => {

  // console.log(sidenBarHidden)
  return (
   <section className={`side__bar ${sidenBarHidden ? 'hiden__sidebar' : ''} `}>
     <FilterPrice searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>
   </section>
  )
}

export default SideBar