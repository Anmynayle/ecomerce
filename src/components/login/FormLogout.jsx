import React from 'react'
import './formlogout.css'


const FormLogout = ({isLogged, setIsLooged}) => {

  const handleClick = () => {
    setIsLooged()
    localStorage.removeItem('token')
  }

  return (
    <article className='form-logout'>
      <i className="form-logout__icon fa-solid fa-user"></i>
      <i className="form-logout__check bx bx-user-circle"></i>
      <button onClick={handleClick} className='form-logout__btn'>Logout</button>
    </article>
  )
}

export default FormLogout