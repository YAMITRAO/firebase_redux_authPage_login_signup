import React, { useRef, useState } from 'react'
import style from "./MailForm.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MailForm = () => {
  const navigate = useNavigate();
  const url = 'https://moviereactapp-3a393-default-rtdb.asia-southeast1.firebasedatabase.app'
  const dispatch = useDispatch();
  const [emailId, setEmailID] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
   const fromMailID = useSelector(state =>  state.mail.authMail);


  const postApiForFrom = async(my_data) => {
    let fromMailId1 = fromMailID.replace("@", "_at_").replaceAll(".", "_dot_")
  
    try{
        let postUrlOfFrom = `${url}/${fromMailId1}.json`
        console.log("Post url of from is :- ");
        console.log(postUrlOfFrom);
        const response = await fetch(postUrlOfFrom, {
            method:"POST",
            body:JSON.stringify({
                data:my_data
            }),
            headers:{
                'Content-type':"application/json"
            }
        })
        if(!response.ok){
            const data = await response.json();
            throw new Error(data.error.message);
        }
        console.log("post api successfulllllll")
        const data = await response.json();
        console.log(data);
        
    }
    catch(error){
        console.log("POST_API_ERROR", error)
    }
}

const postApiForTo = async(my_data, tome) => {
  let toMailID = my_data.toMailID.replace("@", "_at_");
  console.log(toMailID);
  let toMailID1 = toMailID.replaceAll(".", "_dot_");
  console.log(toMailID1);
  
  try{
      let postUrlOfFrom = `${url}/${toMailID1}.json`
      console.log("Post url of from is :- ");
      console.log(postUrlOfFrom);
      let sentData = {};
      if(tome){
        sentData = {
          ...my_data,
          toMailID: "me",
          fromMailID: "me",
        }
      }
      else{
        sentData = my_data
      }
      const response = await fetch(postUrlOfFrom, {
          method:"POST",
          body:JSON.stringify({
              data:sentData
          }),
          headers:{
              'Content-type':"application/json"
          }
      })
      if(!response.ok){
          const data = await response.json();
          throw new Error(data.error.message);
      }
      console.log("post api successfulllllll")
      const data = await response.json();
      navigate("/sent");
      console.log(data);
      
  }
  catch(error){
      console.log("POST_API_ERROR", error)
  }
}


  const formSubmitHandler = (e) => {
    e.preventDefault();
    let data = {
      label:"none",
      toMailID: emailId,
      fromMailID: fromMailID,
      emailSubject: subject,
      emailMessage : message,
      time:new Date(),
      isRead: false,
    }
    if(emailId === fromMailID){
      postApiForTo(data, true);
    }
    else{
      postApiForFrom(data);
      postApiForTo(data, false);
    }
   
  }
  
  
  return (
    <form  onSubmit={ formSubmitHandler}>
    <div className={style.container}>
      <div className={style.cross}>
        <button className={style.button}>X</button>
      </div>

      <div className={style.mailContainer}>
        <div className={style.toMail}>
          <div> <label>To</label>
          <input type="mail" placeholder='Enter Your Email' name="user_email" onChange={ (e) => setEmailID(e.target.value)} value={emailId}/></div>
         <div className={style.ccbcc}>Cc / Bcc</div>
        </div>
      <hr className={style.hrLine}/>
      </div>

      <div className={style.subject}>
           <label>Subject</label>
          <input type="text" placeholder='Enter subject here' name="user_name" onChange={ (e) => setSubject(e.target.value)} value={subject}/>
        </div>
      <hr className={style.hrLine}/>

      <div className={style.textArea}>
        <textarea name="message" onChange={ (e) => setMessage(e.target.value)} value={message}/>
        {/* <input type="text" placeholder='Enter mail Body'/> */}
      </div>
      <hr className={style.hrLine}/>

      <div className={style.footer}>
      <input type="submit" value="Send"  />
        <button className={style.button} type="button">Delete</button>
      </div>
      </div>
      
      </form>

  //   <form ref={form} onSubmit={sendEmail}>
  //   <label>Name</label>
  //   <input type="text" name="user_name" />
  //   <label>Email</label>
  //   <input type="email" name="user_email" />
  //   <label>Message</label>
  //   <textarea name="message" />
  //   <input type="submit" value="Send" />
  // </form>
  )
}

export default MailForm