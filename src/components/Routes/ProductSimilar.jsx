import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


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
    <div>
      {
        productCat?.map(e => {
          if(productInfo.title !== e.title){
            return <h1>{e.title}</h1>
          }
        })
      }
    </div>
  )
}

export default ProductSimilar