import { createSlice } from "@reduxjs/toolkit";


const showMailSlice = createSlice({
    name:"showMailReducer",
    initialState:{
        showMailData:{},
    },
    reducers:{
        showMailDataHandler(state, action){
            console.log(action.payload)
            state.showMailData = action.payload
        }
    }
    
})

export const showMailAction = showMailSlice.actions;
export default showMailSlice.reducer;
