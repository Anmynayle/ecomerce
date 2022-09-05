import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../store/slice/product.slice'
import CardContainer from '../home/CardContainer'
import CardHome from '../home/CardHome'
import Search from '../home/Search'
import './Home.css'


const Home = ({searchProduct,setSearchProduct}) => {


   const dispatch = useDispatch()

  const products =useSelector(state => state.product)
    useEffect(() => {
      dispatch(getAllProduct())
    }, [])
    

return (
    <div className='home'>
      <Search searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>
      <div className="homeContainerCard">
   
        {!searchProduct  ? <CardContainer products={products}/> :<CardContainer products={searchProduct}/> } 
      
      </div>
    </div>
  )
}
//prueba
export default Home