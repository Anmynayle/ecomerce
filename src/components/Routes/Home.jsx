import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../store/slice/product.slice'

const Home = () => {

   const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllProduct())
    }, [])
    
const products =useSelector(state => state.products)
  return (
    <div>Home</div>
  )
}

export default Home