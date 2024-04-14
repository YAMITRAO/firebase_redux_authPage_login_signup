import { createSlice } from "@reduxjs/toolkit";

const initialMailState = {
   mailData:[],
   mailFormData: {}
}

const mailSlice = createSlice({
    name:"mail",
    initialState: initialMailState,
    reducers: {
        mailDataLoad(state, action){
            console.log(action);
        },
        mailFormLoad(state,action){
            console.log(action.payload);
        }
        }
})
                        
export const mailAction =  mailSlice.actions;
export default mailSlice.reducer;