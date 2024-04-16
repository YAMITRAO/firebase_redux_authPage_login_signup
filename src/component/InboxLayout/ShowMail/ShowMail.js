import React from 'react'
import style from "./ShowMail.module.css"
import RightHeader from '../RightHeader/RightHeader'
import { useSelector } from 'react-redux'

const ShowMail = () => {
    const showMailData = useSelector(state => state.showData.showMailData);
  return (
    <div className={style.container}>
        <RightHeader/>
        <div className={style.mailContainer}>
            <div>{showMailData.id}</div>
            <div>{showMailData.emailMessage}</div>
            <div>{showMailData.emailSubject}</div>
            <div>{showMailData.fromMailID}</div>
            <div>{showMailData.toMailID}</div>
        </div>
    </div>
  )
}

export default ShowMail