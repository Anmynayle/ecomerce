import React, { useEffect,useState} from 'react'
import CardHome from '../home/CardHome'
import Search from '../home/Search'
import './Home.css'
import SideBar from './share/SideBar'
import { useSelector } from 'react-redux'


const Home = ({searchProduct,setSearchProduct, setCounter, filterProduts, setFilterProduts}) => {

  const products =useSelector(state => state.product)
// PARA QUE PINTE SOLO LO FILTRADO EN LA BUSQUEDA
  useEffect(() => {
    if(searchProduct.length !== 0){
        const filter = products?.filter(e => e.title.toLowerCase().includes(searchProduct))
         setFilterProduts(filter)
    }else {
      setFilterProduts('')
    }
   }, [searchProduct])


return (
    <div className='home'>
      <Search searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>
      <div className="homeContainerCard">
    {
      filterProduts ?
        filterProduts?.map(produc =>(
            <CardHome
             key={produc.id}
             produc={produc}
             setCounter={setCounter}
            />
        ))
    :
      products?.map(produc =>(
      <CardHome
       key={produc.id}
       produc={produc}
       setCounter={setCounter}
      />
  ))
   }   
    </div>

         {/* {!searchProduct  ? <CardContainer setCounter={setCounter} products={products}/> :<CardContainer setCounter={setCounter} products={searchProduct}/> }   */}
    </div>

)
}

export default Home