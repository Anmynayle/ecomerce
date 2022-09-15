import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './register.css'
import Headers from '../Routes/share/Headers'

const Register = () => {

const navigate = useNavigate()

const {register,handleSubmit}=useForm()

const submit  = data => {
    console.log(data)
  const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users`
    axios.post(URL, data)
    .then(res => {
        console.log(res.data)
        navigate('/login')
        alert ("User Created")
   })
  .catch(err => console.log(err))
 }


  return (
    <div className='login'>
    <Headers/>
   <div className='container-login'>
   <form onSubmit={handleSubmit(submit)} className='regis__form'>
    <img className='lgo-in' src="/img/logoIn.png" alt="" /> 
    <ul className='form__list'>
        <li className='form__item'>
            <label htmlFor="firstName"><i className='bx bxs-user'></i></label>
            <input {...register('firstName')}type="text" id='name' placeholder='first name' />
        </li>
        <li className='form__item'>
            <label htmlFor=" lastName"><i className='bx bxs-user'></i></label>
            <input {...register('lastName')}type="text" id='lastName' placeholder='last name' />
        </li>
        <li className='form__list'>
            <label htmlFor="email"><i className='bx bxs-envelope'></i></label>
            <input   {...register('email')} type="email" id='email' placeholder='email' />
        </li>
        <li className='form__list'>
            <label htmlFor=" password"><i className='bx bx-phone-call'></i></label>
            <input {...register('password')}  type="password" id='password' placeholder='password' />
        </li>
        <li className='form__list'>
            <label htmlFor="phone"><i className='bx bxs-lock-alt'></i></label>
            <input {...register('phone')}  type="text" id='phone' placeholder='phone' />
        </li>
         <li className='form__list'>
            <label htmlFor="role"><i className='bx bxs-user'></i></label>
            <input {...register('role')}  type="role" id='role' placeholder='role' />
        </li> 
    </ul>
    <button className='form__btn'>Create</button>
   </form>
  </div>
  </div>
  )
}

export default Register