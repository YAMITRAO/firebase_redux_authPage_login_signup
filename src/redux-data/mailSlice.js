import { createSlice } from "@reduxjs/toolkit";

const initialMailState = {
    authMail: "",
    inboxData: [],
   sentData: [],
   deleteData: [],
}

const mailSlice = createSlice({
    name:"mail",
    initialState: initialMailState,
    reducers: {
        authInformation(state, action){
            console.log("Auth mail is :- ");
            state.authMail = action.payload;

        },
        mailDataLoad(state, action){
            console.log(action.payload);
            let myMailData = action.payload;
            state.inboxData = [];
            state.sentData = [];
            state.deleteData = [];
            
            for(let x in myMailData){
                console.log(x);
                console.log(myMailData[x].data.fromMailID);
                console.log(state.authMail);
                if(myMailData[x].data.label === "none"){
                    if(myMailData[x].data.fromMailID === state.authMail){
                        let data = {
                            ...myMailData[x].data,
                            id: x,
                        }
                        state.sentData.push(data);
                        console.log("it is a sent mail");
                    }
                    else{
                        let data = {
                            ...myMailData[x].data,
                            id: x,
                        }
                        state.inboxData.push(data);
                        console.log("it is a inbox mail");
                    }
                }
                else if(myMailData[x].data.label === "delete"){
                    let data = {
                        ...myMailData[x].data,
                        id: x,
                    }
                    state.deleteData.push(data);
                }
               
            }
        },
        }
})
                        
export const mailAction =  mailSlice.actions;
export default mailSlice.reducer;