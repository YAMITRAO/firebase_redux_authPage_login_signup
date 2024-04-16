import React from 'react'
import { useSelector } from 'react-redux'

const SentMail = () => {
    const sentMailData = useSelector(state => state.mail.sentData);
    console.log("Sent mail data is :- ")
    console.log(sentMailData);

  return (
    <>
    {/* // <div>{sentMailData[0].emailMessage}</div> */}
    </>
  )
}

export default SentMail