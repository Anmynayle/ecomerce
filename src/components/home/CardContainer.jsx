import React from 'react'
import CardHome from './CardHome'

const CardContainer = ({products, setCounter}) => {


    return (
    <div className="homeContainerCard"> {
        products?.map(produc =>(
            <CardHome
             key={produc.id}
             produc={produc}
             setCounter={setCounter}
            />
        ))
   }   
    </div>
   )
 
}

export default CardContainer
