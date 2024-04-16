import React from 'react'
import style from "./DeleteMail.module.css"
import RightHeader from '../RightHeader/RightHeader';
import MessageCard from '../../Pages/Card/MessageCard/MessageCard';
import { useSelector } from 'react-redux';

const DeleteMail = () => {
    const deleteData = useSelector(state => state.mail.deleteData);
    console.log("Deleted data is ");
    console.log(deleteData);
  return (
    <div className={style.container}>
    <RightHeader/>
     <div className={style.messages}>
         {deleteData.map((val) =>  <MessageCard inboxData = {val }/>)}
     </div>
 </div>
  )
}

export default DeleteMail