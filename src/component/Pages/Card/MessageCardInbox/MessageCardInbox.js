import React, { useState } from 'react'
import style from "./MessageCard.module.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showMailAction } from '../../../../redux-data/showMailSlice';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const MessageCardInbox = (props) => {
    const [changeButton, setChange] = useState(true);
    const myData = props.inboxData;
    let myTime = new Date(myData.time);
    const dispatch = useDispatch();

    const url = 'https://moviereactapp-3a393-default-rtdb.asia-southeast1.firebasedatabase.app'
    const authMail = useSelector(state => state.mail.authMail);
    let authMail1 = authMail.replace("@", "_at_").replaceAll(".", "_dot_")

     const putApi = async(my_data) => {
        let putUrl = `${url}/${authMail1}/${my_data.id}.json`
        // console.log(my_data)
        try{
            const response = await fetch(putUrl, {
                method:"PUT",
                body:JSON.stringify({
                    data:{
                        ...my_data,
                        label:"none",
                        isRead: true,
                    }
                   
                }),
                headers:{
                    'Content-type': "application/json"
                }
            })
            if(!response.ok){
                const data = await response.json();
                throw new Error(data.error.message);
            }
            console.log("Update succesfully at server");
            const data = await response.json();
            console.log(data);
        }
        catch(error){
            console.log("PUT_API_ERROR", error);
    
        }
    }

    const showDataHandler = () => {
      dispatch(showMailAction.showMailDataHandler(props.inboxData));
      putApi(myData);
    }
    

  return (
  <>
 
     <div className={(changeButton) ? style.container : style.containerSelected}>
        <input type="checkbox" onChange={()=> setTimeout( () => {setChange( !changeButton )}, 200)}/>
        <div className={style.read}>{myData.isRead ? "" : <FiberManualRecordIcon color="primary" sx={{ fontSize: 15 }}/> }</div>
        <div className={style.sender}> <Link style={{textDecoration:"none"}}  to={myData.id} onClick={ showDataHandler }>{myData.fromMailID}</Link></div>
        <div className={style.starred}><StarBorderIcon color="warning"/></div>
        <div className={style.senderSubject}>{myData.emailSubject}</div>
        <div className={style.senderMessage}>{myData.emailMessage}</div>
        <div className={style.time} >{myTime.getUTCHours()}:{myTime.getUTCMinutes()}</div>
    </div>
    
    </>
  )
}

export default MessageCardInbox;