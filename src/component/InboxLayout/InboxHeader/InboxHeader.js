import React from 'react'
import style from "./InboxHeader.module.css"
import SearchIcon from '@mui/icons-material/Search';

const InboxHeader = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        MailApp
      </div>
      <div className={style.search}>
        
        <input className={style.input} type="text"/>
        <SearchIcon fontSize="large" />
      </div>
    </div>
  )
}

export default InboxHeader