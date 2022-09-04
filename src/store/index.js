import { configureStore } from "@reduxjs/toolkit";
import product from './slice/product.slice'
import productFilter from './slice/productFilter.slice'

 export default configureStore({
    reducer:{
     product,
     productFilter
    }
})