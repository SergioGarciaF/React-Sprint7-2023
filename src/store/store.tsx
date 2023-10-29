import { configureStore } from "@reduxjs/toolkit";
// reducers
import starships from './slices'

export default configureStore ({
    reducer:{
        starships 
    }
})