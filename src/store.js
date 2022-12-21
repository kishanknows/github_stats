import { configureStore } from "@reduxjs/toolkit";
import statReducer from "./statSlice";

export const store = configureStore({
    reducer:{
        username: statReducer
    }
})