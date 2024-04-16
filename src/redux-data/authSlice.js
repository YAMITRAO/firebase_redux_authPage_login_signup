import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"authReducer",
    initialState:{
        isAuth : false,
    },
    reducers:{
        authHandler(state){
            state.isAuth = !state.isAuth
        },
    }
});

export const authAction = authSlice.actions;
export default authSlice.reducer;