import React from 'react'
import style from "./DeleteLayout.module.css"
import DeleteMail from './DeleteMail/DeleteMail'
import InboxHeader from './InboxHeader/InboxHeader'
import InboxLeft from './InboxLeft/InboxLeft'

const DeleteLayout = () => {
  return (
    <div className={style.container}>
    <div className={style.header}><InboxHeader/></div>
    <div className={style.section}>
        <div className={style.left}><InboxLeft/></div>
        <div className={style.right}><DeleteMail/></div>
    </div>
</div>
  )
}

export default DeleteLayout