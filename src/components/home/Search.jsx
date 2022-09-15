import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'

import './Search.css'

const Search = ({setSearchProduct}) => {

  const products = useSelector(state =>state.product)

  const handleChange = e => {
    setSearchProduct(e.target.value.toLowerCase().trim())
  }

// const handleChange = () =>{
//      let arrProducts=[];
//      products.forEach(product => {
//       if(product.title.toLowerCase().includes(search.value)){
//         arrProducts.push(product)
//       }
//       setSearchProduct(arrProducts)
//      });
// }
// console.log(searchProduct)

  return (
    <div className='search' >
       <input  onChange={handleChange} type="text" placeholder='What are you looking for' />
       <button><i className='bx bx-search-alt'></i></button>
    </div>
  )
}

export default Search