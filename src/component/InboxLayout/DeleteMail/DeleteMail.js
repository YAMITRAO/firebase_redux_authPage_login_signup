import React from 'react'
import style from "./DeleteMail.module.css"
import RightHeader from '../RightHeader/RightHeader';
import { useSelector } from 'react-redux';
import MessageCardDelete from '../../Pages/Card/MessageCardDelete/MessageCardDelete';

const DeleteMail = () => {
    const deleteData = useSelector(state => state.mail.deleteData);
    console.log("Deleted data is ");
    console.log(deleteData);
  return (
    <div className={style.container}>
    <RightHeader/>
     <div className={style.messages}>
         {deleteData.map((val) =>  <MessageCardDelete inboxData = {val }/>)}
     </div>
 </div>
  )
}

export default DeleteMail