import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./mailSlice";


const dataStore = configureStore({
    reducer:{
        mail: mailSlice
    }
})


export default dataStore;