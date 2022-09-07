import React, { useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../store/slice/product.slice'
import CardContainer from '../home/CardContainer'
import Search from '../home/Search'
import './Home.css'
import SideBar from './share/SideBar'


const Home = ({searchProduct,setSearchProduct, setCounter}) => {

  const [cartClose, setCartClose] = useState()

   const dispatch = useDispatch()

  const products =useSelector(state => state.product)
    useEffect(() => {
      dispatch(getAllProduct())
    }, [])
    

return (
    <div className='home'>
    
      <Search searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>
      <div className="homeContainerCard">
   
        {!searchProduct  ? <CardContainer setCounter={setCounter} products={products}/> :<CardContainer setCounter={setCounter} products={searchProduct}/> } 
      
      </div>
      
    </div>
  )
}
//prueba
export default Home