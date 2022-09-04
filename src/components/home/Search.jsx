import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'

import './Search.css'

const Search = ({searchProduct, setSearchProduct}) => {

  const products = useSelector(state =>state.product)

const handleSubmit = () =>{
     let arrProducts=[];
     products.forEach(product => {
      if(product.title.toLowerCase().includes(search.value)){
        arrProducts.push(product)
      }
      setSearchProduct(arrProducts)
     });
}
// console.log(searchProduct)

  return (
    <div className='search' >
       <input id='search' onChange={handleSubmit} type="text" placeholder='What are you looking for' />
       <button><i className='bx bx-search-alt'></i></button>
    </div>
  )
}

export default Search