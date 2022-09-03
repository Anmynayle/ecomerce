import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../store/slice/product.slice'
import CardHome from '../home/CardHome'
import Search from '../home/Search'
import './Home.css'
const Home = () => {

   const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllProduct())
    }, [])
    

const product =useSelector(state => state.product)
  
console.log(product)
return (
    <div className='home'>
      <Search/>
      <div className="homeContainerCard">
      {
      product?.map(produc =>(
        <CardHome
        key={produc.id}
        produc={produc}
        />
      ))
    }   
      </div>
    </div>
  )
}

export default Home