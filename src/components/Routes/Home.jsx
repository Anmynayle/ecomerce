import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../store/slice/product.slice'
import CardContainer from '../home/CardContainer'
import CardHome from '../home/CardHome'
import Search from '../home/Search'
import './Home.css'


const Home = () => {

const [searchProduct, setSearchProduct] = useState()

   const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllProduct())
    }, [])
    

const products =useSelector(state => state.product)
  
// console.log(products)
return (
    <div className='home'>
      <Search searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>
      <div className="homeContainerCard">
   
        {!searchProduct  ? <CardContainer products={products}/> :<CardContainer products={searchProduct}/> } 
      
      </div>
    </div>
  )
}

export default Home