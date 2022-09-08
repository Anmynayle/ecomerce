import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from  './Header.css'

const Headers = ({setSidenBarHidden, sidenBarHidden, cartHidden, setCartHidden}) => {

  const isLogged = localStorage.getItem('token')
 

const handleSideBar= () => {
  setSidenBarHidden(!sidenBarHidden)
}


const handleCart= () => {
  if(isLogged){
   setCartHidden(!cartHidden)
}else{
  if (confirm('Para visualizar product debe loguearse') == true) {
    navigate(`/login/`)
  } 
}


}

console.log(cartHidden)
  return (
    <header className="header">
      <div className="header__top">
        <i onClick={handleSideBar} className='bx bx-filter-alt'></i>
      <NavLink className="header__item" to="/">
        <img className='logo-img' src="/img/logo-ecomerce.png" alt="" />
        {/* <h1>E-commerce</h1> */}
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
          {/* <NavLink className={({isActive})=> isActive ? 'active-link':''} to="/cart"> */}
          <i onClick={handleCart}  className='bx bx-cart-add'></i>
          {/* </NavLink> */}
          </li>
          <div className="line"/>
        </ul>
      </nav>
    </header>

  )
}

export default Headers