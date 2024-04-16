import React from 'react'
import style from "./ShowMailLayout.module.css"
import InboxHeader from './InboxHeader/InboxHeader'
import InboxLeft from './InboxLeft/InboxLeft'
import ShowMail from './ShowMail/ShowMail'

const ShowMailLayout = () => {
  return (
    <div className={style.container}>
    <div className={style.header}><InboxHeader/></div>
    <div className={style.section}>
        <div className={style.left}><InboxLeft/></div>
        <div className={style.right}><ShowMail/></div>
    </div>
</div>
  )
}

export default ShowMailLayout