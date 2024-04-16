import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./mailSlice";
import authSlice from "./authSlice";
import showMailSlice from "./showMailSlice";


const dataStore = configureStore({
    reducer:{
        mail: mailSlice,
        authData: authSlice,
        showData: showMailSlice,
    }
})


export default dataStore;