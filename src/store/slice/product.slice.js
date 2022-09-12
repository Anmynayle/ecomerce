import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productSlice = createSlice({
    name:'product',
    initialState:null,
    reducers:{
      setProduct: (state, actions)=>actions.payload
    }

})

 export const {setProduct} = productSlice.actions

export default productSlice.reducer

export const getAllProduct= () => (dispatch) =>{
    const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/products`
    return axios.get(URL)
    .then(res=> dispatch(setProduct(res.data.data.products)))
    .catch(err => console.log(err))
    
}

export const getProductCategory = (id) => (dispatch) =>{
  const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`
  return axios.get(URL)
  .then(res=> dispatch(setProduct(res.data.data.products)))
  .catch(err => console.log(err))
  
}

