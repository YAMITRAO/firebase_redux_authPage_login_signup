import React from 'react'
import style from "./InboxRight.module.css"
import MessageCard from '../../Pages/Card/MessageCardInbox/MessageCardInbox'
import { useSelector } from 'react-redux'
import RightHeader from '../RightHeader/RightHeader'
import MessageCardInbox from '../../Pages/Card/MessageCardInbox/MessageCardInbox'


const InboxRight = () => {
    const inboxData = useSelector(state => state.mail.inboxData);
    
  return (
    <div className={style.container}>
       <RightHeader/>
        <div className={style.messages}>
            {inboxData.map((val) =>  <MessageCardInbox inboxData = {val } />)}
        </div>
    </div>
  )
}

export default InboxRight