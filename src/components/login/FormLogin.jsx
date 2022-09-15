import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './formin.css'


const FormLogin = ({setIsLooged}) => {

    const {register,handleSubmit,reset}=useForm()
   
    const navigate = useNavigate()
    const submit =(data) => {
        const url= `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`
        axios.post(url , data)
        .then(res=>{
            navigate('/')
            console.log(res.data.data.user)
            localStorage.setItem('token',res.data.data.token)})
            .catch(err =>alert("Invalid Credential"))
        reset({
            email:'',
             password:''
          })
    }

  return (
    <section className='container-login'>
      <form onSubmit={handleSubmit(submit)} className='login__form'>
      
        <img className='lgo-in' src="/img/logoIn.png" alt="" />
        
        
        <div className="in-user">
          <div className='login__div-email'>
            <label className='login__label' htmlFor="email"></label>
            <input 
            {...register('email')}
            className='login__input' 
            type="email"
            id="email" 
            placeholder='Username'/>
            
          </div>
          <div className='login__div-password'>
            <label className='login__label' htmlFor="password"></label>
            <input 
            {...register('password')} 
            className='login__input'
            type="password" 
            id="password"
            placeholder='Password'/>
          </div>
        </div>
        <div className='check-remember'>
          <input type="checkbox" />
          <h3 className='remember-title'>Remember password</h3>
        </div>
        <button className='login_btn'>LOGIN</button>
        <div className="register-option">
          <h3>Not Registered?</h3>
        <NavLink className="header__item" to="/register">Sign Up</NavLink>
     
        </div>
        
      </form>
    </section>
    

  )
}

export default FormLogin