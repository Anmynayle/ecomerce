import React, { useEffect, useState } from 'react'
import FormLogin from '../login/FormLogin'
import FormLogout from '../login/FormLogout'
import Register from '../login/Register'
import Headers from './share/Headers'


const Login = () => {

  const [isLogged, setIsLooged] = useState()

  useEffect(() => {
    setIsLooged(localStorage.getItem('token'))
  }, [])

  return (
    <main className='login'>
      <Headers/>
      {
        isLogged ?
          <FormLogout setIsLooged={setIsLooged} isLogged={isLogged} />
        :
        // <Register/>
        <FormLogin setIsLooged={setIsLooged} />
      }
    </main>
  )
}

export default Login