import React from 'react'
import { useSelector } from 'react-redux'

const Inbox = () => {
    let inboxData = useSelector(state => state.mail.inboxData);
    console.log("inbox data is :- ");
    console.log(inboxData);
  return (
    <>
    {/* // <div>{inboxData[0].emailMessage}</div> */}
    </>
  )
}

export default Inbox