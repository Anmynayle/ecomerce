import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productFilterSlice = createSlice({
    name:'productFilter',
    initialState:null,
    reducers:{
      setProductFilter: (state, actions)=>actions.payload
    }

})

 export const {setProductFilter} = productFilterSlice.actions

export default productFilterSlice.reducer

export const getAllProductFilter= () => (dispatch) =>{
    const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/products`
    return axios.get(URL)
    .then(res=> dispatch(setProductFilter(res.data.data.products)))
    .catch(err => console.log(err))
    
}