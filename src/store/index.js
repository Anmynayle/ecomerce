import { configureStore } from "@reduxjs/toolkit";
import product from './slice/product.slice'

 export default configureStore({
    reducer:{
     product
    }
})