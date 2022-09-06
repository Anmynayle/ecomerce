import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'


const FormLogin = () => {

    const {register,handleSubmit,reset}=useForm()
    
    const submit =(data) => {
        // console.log(data)
        const url= `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`
        axios.post(url , data)
        .then(res=>{
            console.log(res.data)
            localStorage.setItem('token',res.data.data.token)})
        .catch(err =>console.log(err))
        // reset({
        //     email:'',
        //     password:''
        //  })
    }

  return (
    <form onSubmit={handleSubmit(submit)} className='login__form'>
    <h2 className='login__title'>Welcome! Enter your email and password to continue</h2>
    <div className='login__div-email'>
      <label className='login__label' htmlFor="email">Email</label>
      <input 
      {...register('email')}
      className='login__input' 
      type="email"
       id="email" />
    </div>
    <div className='login__div-password'>
      <label className='login__label' htmlFor="password">Password</label>
      <input 
      {...register('password')} 
      className='login__input'
       type="password" 
       id="password" />
    </div>
    <button className='login_btn'>Login</button>
  </form>

  )
}

export default FormLogin