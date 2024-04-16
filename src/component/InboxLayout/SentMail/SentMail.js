import React from 'react'
import style from "./SentMail.module.css"
import { useSelector } from 'react-redux';
import RightHeader from '../RightHeader/RightHeader';
import MessageCardSent from '../../Pages/Card/MessageCardSent/MessageCardSent';

const SentMail = () => {
    const sentData = useSelector(state => state.mail.sentData);
  return (
    <div className={style.container}>
       <RightHeader/>
        <div className={style.messages}>
            {sentData.map((val) =>  <MessageCardSent inboxData = {val}/>)}
        </div>
    </div>
  )
}

export default SentMail