import React from 'react'
import style from "./InboxLeft.module.css"
import { Link } from 'react-router-dom'

const InboxLeft = () => {
  return (
    <div className={style.container}>
        <button className={style.composeButton}><Link to="/create_mail" style={{color:"inherit", textDecoration:"none"}}>Compose</Link></button>
        <div className={style.messageContainer}>
            <button><Link to="/inbox" style={{color:"inherit", textDecoration:"none"}}>Inbox</Link></button>
            <button>Unread</button>
            <button>Starred</button>
            <button>Drafts</button>
            <button><Link style={{color:"inherit", textDecoration:"none"}} to="/sent">Sent</Link></button>
            <button>Archives</button>
            <button>Spam</button>
            <button><Link style={{color:"inherit", textDecoration:"none"}} to="/delete">Deleted Items</Link></button>
        </div>

        <div className={style.messageContainer}>
            <button>Photos</button>
            <button>Documents</button>
            <button>Subscription</button>
            <button>Deals</button>
            <button>Travel</button>
            <button>Archives</button>
            <button>Spam</button>
            <button>Deleted Items</button>
        </div>
    </div>
  )
}

export default InboxLeft