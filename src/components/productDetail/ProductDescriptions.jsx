import React from 'react'
import { useState } from 'react'



const ProductDescriptions = ({productInfo}) => {
    const [count, setCount] = useState(1)
    
    const handlePlus =()=> setCount(count+1)
    
    
    const handleMinus =()=> {
        if (count -1 >=1){
        setCount(count-1)
     }
    }
    return (
        <section className='product__descri'>
      <h2 className='product__descri_name'>{productInfo?.title}</h2>
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
       </div>
    </section>
  )
}

export default ProductDescriptions