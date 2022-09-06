import React from 'react'
import { useState } from 'react'
import './productDes.css'



const ProductDescriptions = ({ productInfo }) => {
  const [count, setCount] = useState(1)

  const handlePlus = () => setCount(count + 1)
  

  const handleMinus = () => {
    if (count - 1 >= 1) {
      setCount(count - 1)
    }
  }

  // console.log(productInfo)
  return (

    <section className='product__descri'>

      <div className='history'>
        <a href="#">Home</a>
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
                  {/* <input type="text"/> */}
                  <button onClick={handlePlus}>+</button>
                </div>
              </div>
            </div>
            <button className='add-card-btn'>Add to Card</button>
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