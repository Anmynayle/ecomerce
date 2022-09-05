import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from  './Header.css'

const Headers = ({setSidenBarHidden, sidenBarHidden, cartHidden, setCartHidden}) => {


const handleSideBar= () => {
  setSidenBarHidden(!sidenBarHidden)
}

const handleCart= () => {
  console.log(cartHidden)
  setCartHidden(!cartHidden)
}

console.log(cartHidden)
  return (
    <header className="header">
      <div className="header__top">
        <i onClick={handleSideBar} className='bx bx-filter-alt'></i>
      <NavLink className="header__item" to="/">
        <h1>E-commerce</h1>
      </NavLink>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className={({isActive}) => isActive ? 'active-link': ''}
             to="/login">
              <i className='bx bx-user'></i>
            </NavLink>
          </li>
          <div className="line"/>
          <li className="header__item">
            <NavLink className={({isActive})=> isActive ? 'active-link':''} to="/purshase">
            <i className='bx bx-box'></i>
            </NavLink>
          </li>
          <div className="line"/>
          <li className="header__item">
          <i onClick={handleCart} className='bx bx-cart-add'></i>
          </li>
          <div className="line"/>
        </ul>
      </nav>
    </header>

  )
}

export default Headers