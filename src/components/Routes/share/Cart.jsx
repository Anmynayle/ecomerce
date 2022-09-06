import axios from 'axios'
import React from 'react'
import ProductCartInfo from '../../cart/ProductCartInfo'
import { useState,useEffect } from 'react'


const Cart = () => {

    const [cartProducts, setCartProducts] = useState()
 
    useEffect(() => {
        
        const config ={
         headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
         }
        }
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, config)
          .then(res => setCartProducts(res.data))
          .catch(err => console.log(err))
      }, [])
    
      console.log(cartProducts)
    


  return (
    <section className='cart'>
        <h2 className='card_title'>Cart</h2>
        <ProductCartInfo/>
        <hr  className='cart_hr'/>
        <footer className='card__footer'>
            <span className='card_total'>Total</span>
            <p className='card_total_global_value'></p>
            <button className='card_btn'>Checkout</button>
        </footer>
    </section>
  )
}

export default Cart