import React from 'react'
import style from "./InboxLayout.module.css"
import InboxHeader from './InboxHeader/InboxHeader'
import InboxLeft from './InboxLeft/InboxLeft'
import InboxRight from './InboxRight/InboxRight'
import { useDispatch, useSelector } from 'react-redux'
import { mailAction } from '../../redux-data/mailSlice'

const InboxLayout = () => {

  const urlget = 'https://moviereactapp-3a393-default-rtdb.asia-southeast1.firebasedatabase.app'
 const authMail = useSelector(state => state.mail.authMail);
 const dispatch = useDispatch();

  const getApi = async() => {
      let loginMailID1 = authMail.replace("@", "_at_").replaceAll(".", "_dot_")
 
      try{
          let getUrl = `${urlget}/${loginMailID1}.json`
          console.log(getUrl);
          const response = await fetch(getUrl);
          if(!response.ok){
              const data = await response.json();
              throw new Error(data.error.message);
          }
          const data = await response.json();
          console.log(data);
          dispatch(mailAction.mailDataLoad(data));
          // dispatch(authAction.authHandler());
      }
      catch(error){
          console.log("GET_API_ERROR");
      } 
  }

  setTimeout( () => {  getApi() }, 5000);

  return (
    <div className={style.container}>
        <div className={style.header}><InboxHeader/></div>
        <div className={style.section}>
            <div className={style.left}><InboxLeft/></div>
            <div className={style.right}><InboxRight/></div>
        </div>
    </div>
  )
}

export default InboxLayout