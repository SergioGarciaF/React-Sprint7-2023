import { configureStore } from "@reduxjs/toolkit";
// reducers
import { starshipsReducer, userReducer } from "./slices";

export default configureStore({
    reducer: {
        starships: starshipsReducer,
        user: userReducer,
    }
})