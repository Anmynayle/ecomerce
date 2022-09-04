import React from 'react'
import CardHome from './CardHome'

const CardContainer = ({products}) => {


    return (
    <div className="homeContainerCard"> {
        products?.map(produc =>(
            <CardHome
             key={produc.id}
             produc={produc}
            />
        ))
   }   
    </div>
   )
 
}

export default CardContainer