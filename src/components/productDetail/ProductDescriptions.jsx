import React from 'react'
import { useState, useEffect } from 'react'
import './productDes.css'
import axios  from 'axios'
import getConfig from '../../utils/getConfig'
import { get } from 'react-hook-form'


const ProductDescriptions = ({ productInfo, setCounter}) => {
  const [count, setCount] = useState(1)

  const isLogged = localStorage.getItem('token')

  const handlePlus = () => setCount(count + 1)
  


  const handleMinus = () => {
    if (count - 1 >= 1) {
      setCount(count - 1)
    }
  }
//   const handleAddCartDet= () =>{
//     const url = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
//     const obj ={
//       id: productInfo.id,
//       quantity:count
//     }
//     axios.post(url,obj, getConfig())
//     .then(res => console.log(res.data))
//     .catch(err=> console.log(err))
// }

const handleAddCartDet= () =>{
  if(isLogged){
  const url= `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
  const obj={
      id: productInfo.id,
      quantity:count
  }
  axios.post(url,obj, getConfig())
.then(res=>{
  alert("added product")
  setCounter(e => e + 1)
})
  .catch(err =>  alert("You already added this product to the cart"))
 
}else {
  
  if (confirm('Para agregar productos debe loguearse') == true) {
      navigate(`/login/`)
    } 
    
}
}
  // console.log(productInfo)
  return (

    <section className='product__descri'>

      <div className='history'>
      <i className='bx bx-home'></i>
        <div className='sepator'>O</div>
        <b>{productInfo?.title}</b>
      </div>

      <div className="product-info">
        <div className="col1">carrusel</div>
        <div className="col2">
          <h2>{productInfo?.title}</h2>
          <div className="product-data">
            <p>{productInfo?.description}</p>
            <div className="product-options">
              <div className="price">
                <h3>Price</h3>
                <h3>$ {productInfo?.price}</h3>
              </div>
              <div className="quanty">
                <h3>Quanty</h3>
                <div className="option-quanty">
                  <button onClick={handleMinus}>-</button>
                  <div className='val'>{count}</div>
                  <button onClick={handlePlus}>+</button>
                </div>
              </div>
            </div>
            <button onClick={handleAddCartDet} className='add-card-btn'>Add to Cart</button>
          </div>
    
          
        </div>
      </div>

      <div className="suggestions">
        <h2>Discover similar items</h2>
      </div>

    </section>
  )
}

export default ProductDescriptions