import React, { useState } from 'react'
import style from "./MessageCard.module.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showMailAction } from '../../../../redux-data/showMailSlice';

const MessageCardDelete = (props) => {
    const [changeButton, setChange] = useState(true);
    const myData = props.inboxData;
    let myTime = new Date(myData.time);
    const dispatch = useDispatch();
    const showDataHandler = () => {
      dispatch(showMailAction.showMailDataHandler(props.inboxData));
    }
    
  return (
  <>
     <div className={(changeButton) ? style.container : style.containerSelected}>
        <input type="checkbox" onChange={()=> setTimeout( () => {setChange( !changeButton )}, 200)}/>
        <div className={style.sender}> <Link style={{textDecoration:"none"}}  to={myData.id} onClick={ showDataHandler }>{myData.toMailID}</Link></div>
        <div className={style.starred}><StarBorderIcon color="warning"/></div>
        <div className={style.senderSubject}>{myData.emailSubject}</div>
        <div className={style.senderMessage}>{myData.emailMessage}</div>
        <div className={style.time} >{myTime.getUTCHours()}:{myTime.getUTCMinutes()}</div>
    </div> 
    </>
  )
}

export default MessageCardDelete;