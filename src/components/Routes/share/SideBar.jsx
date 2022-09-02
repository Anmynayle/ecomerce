import React from 'react'
import FilterPrice from '../FilterPrice'
import  './SideBar.css'

const SideBar = ({setSidenBarHidden, sidenBarHidden}) => {

  console.log(sidenBarHidden)
  return (
   <section className={`side__bar ${sidenBarHidden ? 'hiden__sidebar' : ''} `}>
   <FilterPrice/>
   </section>
  )
}

export default SideBar