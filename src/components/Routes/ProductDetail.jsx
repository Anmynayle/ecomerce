import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import ProductDescriptions from '../productDetail/ProductDescriptions'
import ProductSimilar from '../productDetail/ProductSimilar'

const ProductDetail = ({setCounter}) => {


  const [productInfo, setProductInfo] = useState()
   const { id } =useParams()

   useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
     axios.get(URL)
     .then(res=>setProductInfo(res.data.data.product))
     .catch(err => console.log(err))

   }, [])
   
  return (
    <div>
      <ProductDescriptions
      productInfo={productInfo}
      setCounter={setCounter}
      />
      <div>
        <ProductSimilar productInfo={productInfo}/>
      </div>
      </div>
  
  )
}

export default ProductDetail