import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'


const FilterPrice = ({searchProduct, setSearchProduct}) => {

const [category, setCategory] = useState()



const products = useSelector(state =>state.product)



useEffect(() => {
  const urlcat=`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
  axios.get(urlcat)
  .then(res=>setCategory(res.data.data.categories))
  .catch(err=> console.log(err))
}, [])

const handleFilter = (name) =>{
  let arrProductsCategory=[];
   products.forEach(product => {
    if(product.category.name.includes(name)){
      arrProductsCategory.push(product)
    }
   setSearchProduct(arrProductsCategory)
   });
 }


  const handleFilterPrice = e => {
    e.preventDefault()

    if (e.target.from.value && !e.target.to.value) {

      let searchPrice = (e.target.from.value)
      let arrProductsPrice = [];
      let newarr = products.filter(pro => pro.price <= parseInt(searchPrice, 10));
      console.log(newarr.length)
      setSearchProduct(newarr)


    } else if (e.target.from.value && e.target.to.value) {
        let searchPriceFrom = (e.target.from.value)
        let searchPriceTo = (e.target.to.value)

        let arrProductsRange = [];
        let newarr = products.filter(product => {
          if(product.price >=  parseInt(searchPriceFrom, 10)){
              if(product.price <=  parseInt(searchPriceTo, 10)){
                  arrProductsRange.push(product)
              }
          }
        })
        setSearchProduct(arrProductsRange)
        console.log(arrProductsRange)

    } else if (!e.target.from.value && e.target.to.value) {
      let searchPrice = (e.target.to.value)
      let arrProductsPrice = [];
      let newarr = products.filter(pro => pro.price >= parseInt(searchPrice, 10));
      console.log(newarr.length)
      setSearchProduct(newarr)
    }
     else {
        setSearchProduct()
     }


  }

console.log(searchProduct)
  return (
    <div  className='filter__Types'>
      <form  onSubmit={handleFilterPrice} className="filter__price">
      <h2>Price</h2>
      <div className="filter__line" />
      <div className="filter__content">
        <label htmlFor="">
          <span>From:</span>
        </label>
        <input id='from' type="number" />
      </div>
      <div className="filter__content">
        <label htmlFor="">
          <span>To:</span>
        </label>
        <input id='to' type="number" />
      </div>
      <button className='btn_filter'>Filter Price</button>
      </form>
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