import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../../utils/getConfig'
import ProductCartInfo from '../../cart/ProductCartInfo'
import './card.css'

const Cart = ({cartHidden,setCartHidden, counter}) => {

  const [cartProducts, setCartProducts] = useState()
  const [totalPrice, setTotalPrice] = useState()


  const getAllProductsCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
      .then(res => {
        const products= (res.data.data.cart.products)
        setCartProducts(res.data.data.cart.products)
        //total a pagar en el cart
        const total = products.reduce((acc, cv)=> {
          return Number(cv.price) * cv.productsInCart.quantity + acc
        },0) 
        setTotalPrice(total)

      })

      .catch(err => setCartProducts())
  }

  useEffect(() => {
    getAllProductsCart()
  }, [ counter])

  const handleCheckout = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, obj, getConfig())
      .then(res => {
        console.log(res.data)
        getAllProductsCart()
      })
      .catch(err => console.log(err))
  }

   
  // const sum = cartProducts?.map(item=>item.price).reduce((prev, curr)=> prev + curr,0)

  return (
    <div className={`produc ${cartHidden ? 'container-cart-none' : ''}`}>
    <section className='cart'>
      <h2 className='cart__title'>Cart</h2>
      <div className='cart__container-item'>
         {
          cartProducts?.map(product => (
          <ProductCartInfo
              key={product.id}
              product={product}
              getAllProductsCart={getAllProductsCart}
            />
          ))
        } 
      </div>
      <hr className='cart__hr' />
      <footer className='cart__footer'>
        <span className='cart__total-global-label'>Total:</span>
        <p className='cart__total-global-value'> {totalPrice} </p>
        <button onClick={handleCheckout} className='cart__btn'>Checkout</button>
      </footer>
    </section>
  </div>
  )
}

   
export default Cart