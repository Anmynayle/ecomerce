import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import './Productsimilar.css'

const ProductSimilar = ({productInfo}) => {

    const [productCat, setProductCat] = useState()
    
const products = useSelector(state =>state.product)
    
// console.log(productInfo)
// console.log(products)

useEffect(() => {
  if(productInfo){
    let arrProductsSimilar=[];
      products.forEach(product => {
         if(product.category.name.includes(productInfo.category)){
           arrProductsSimilar.push(product)
     }
    setProductCat(arrProductsSimilar)
    })
  }
}, [productInfo])

console.log(productCat)

  return (

    <div className="homeContainerCard">
      
      {
        productCat?.map(procat => {
          if(productInfo.title !== procat.title){
             return  <div className='card_simi'>  <CardHome
             key={procat.id}
             produc={procat}
            /></div>
      }
        })
      }
         
    </div>
  
  )
}

export default ProductSimilar