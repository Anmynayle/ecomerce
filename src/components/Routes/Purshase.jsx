import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'
import { useState,useEffect } from 'react'

const Purshase = () => {

const [purshase, setPurshase] = useState()

  useEffect(() => {
   const url =`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`
   axios.get(url,getConfig())
   .then(res=>setPurshase(res.data.data.purchases[0].cart.products))
   .catch(err=>console.log(err))

  }, [])

 console.log(purshase)
  
  return (
    <div>
       {
        purshase?.map(purs=>{
          <div className="container_purshase">
            <div className="container__header">
              <h2>Fecha</h2>
            </div>
          <div className="purshase_info">
    

          </div>
          </div>
        })
      } 
    </div>
  )
}

export default Purshase