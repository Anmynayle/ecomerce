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

  console.log(productInfo)
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
                <h3>quanty</h3>
                <div className="option-quanty">
                  <button>-</button>
                  <input type="text" />
                  <button>+</button>
                </div>
              </div>
            </div>
            <button className='add-card-btn'>Add to Card</button>
          </div>
          
          
        </div>
      </div>

      <div className="suggestions">
        <h2>Discover similar items</h2>
        <div className="article-similar-container">

        </div>

      </div>




      {/* <h2 className='product__descri_name'>{productInfo?.title}</h2>
      <p className='product__Info__description'>{productInfo?.descriptiom}</p>
      <div className="product__info__body">
        <article className='product_info_price'>
          <h3 className='product__info_price_label'>Price</h3>
          <span className='product_info_price_value'>{productInfo?.price}</span>
        </article>
        <article className='product_info_quanty'>
          <h3 className='product_info_quanty_label'>Quantity</h3>
          <div className='product_info_quanty__product'>
            <button onClick={handleMinus}>-</button>
            <div>{count}</div>
            <button onClick={handlePlus}>+</button>
          </div>
        </article>
      </div> */}
    </section>
  )
}

export default ProductDescriptions