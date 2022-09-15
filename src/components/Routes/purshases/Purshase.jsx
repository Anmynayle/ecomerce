import axios from 'axios'
import React from 'react'
import getConfig from '../../../utils/getConfig'
import { useState,useEffect } from 'react'
import './Purshase.css'

const Purshase = () => {

const [purshase, setPurshase] = useState()

  useEffect(() => {
   const url =`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`
   axios.get(url,getConfig())
   .then(res=>setPurshase(res.data.data.purchases))
   .catch(err=>console.log(err))

  }, [])

  
  return (
    <div className='purshase'>
      {
        purshase?.map(produc => (
          <div className="container_purshase">
            <div className="container__header">
              <h2>Number Order: {produc.id}</h2>
            </div>
            <div className="purshase_info">
              {
                produc.cart.products.map(produ => (
                  <ul className='purshase_body'>
                    <li className='purshaseItem'>
                      <div className="name">{produ.title}</div>
                      <div className="quuantity_purshase">
                        <div className="box_quantity">
                          {produ.productsInCart.quantity}
                        </div>
                      </div>
                      <div className="price_purshase">
                        ${produ.price}
                      </div>

                    </li>
                  </ul>
                ))

              }
            </div>
          </div>

        ))
      }   
     
    </div>
  )
}

export default Purshase