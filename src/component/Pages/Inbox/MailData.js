import React, { useEffect } from 'react'
import {   useDispatch, useSelector } from 'react-redux';
import { mailAction } from '../../../redux-data/mailSlice';
const MailData = () => {
    const url = 'https://moviereactapp-3a393-default-rtdb.asia-southeast1.firebasedatabase.app'

    const loginMailID = useSelector(state =>  state.mail.authMail);
    const dispatch = useDispatch();

    const getApi = async() => {
        let loginMailID1 = loginMailID.replace("@", "_at_").replaceAll(".", "_dot_")
   
        try{
            let getUrl = `${url}/${loginMailID1}.json`
            console.log(getUrl);
            const response = await fetch(getUrl);
            if(!response.ok){
                const data = await response.json();
                throw new Error(data.error.message);
            }
            const data = await response.json();
            console.log(data);
            dispatch(mailAction.mailDataLoad(data));
        }
        catch(error){
            console.log("GET_API_ERROR");
        } 
    }


    useEffect(()=>{
        getApi();
    }, []);

  return (
    <>
    </>
  )
}

export default MailData