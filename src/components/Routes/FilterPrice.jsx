import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

const FilterPrice = () => {

const [category, setCategory] = useState()

useEffect(() => {
  const urlcat=`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
  axios.get(urlcat)
  .then(res=>setCategory(res.data.data.categories))
  .catch(err=> console.log(err))
}, [])


const handleFilter = (name) => {
  let arrProducts=[];
     category.forEach(option => {
      if(category.includes(name)){
        arrProducts.push(option)
      }
      setSearchProduct(arrProducts)
     });

}

// console.log(category)

  return (
    <div className='filter__Types'>
      <div className="filter__price">
      <h2>Price</h2>
      <div className="filter__line" />
      <div className="filter__content">
        <label htmlFor="">
          <span>From:</span>
        </label>
        <input type="number" />
      </div>
      <div className="filter__content">
        <label htmlFor="">
          <span>To:</span>
        </label>
        <input type="number" />
      </div>
      <button className='btn_filter'>Filter Price</button>
      </div>
      <div className="filter__category">
        <h2>Category</h2>
         <div className="filter__line" />
         <ul className='filter__list'>
         {
          category?.map(cat=>(
            <li onClick={()=>handleFilter(cat.name)} key={cat.id}>{cat.name}</li>
          ))
         }
         </ul>
         </div>
    </div>
  )
}

export default FilterPrice