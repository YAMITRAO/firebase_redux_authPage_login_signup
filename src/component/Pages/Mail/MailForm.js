import React, { useRef } from 'react'
import style from "./MailForm.module.css"
import { Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

const MailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log("clicked")
    e.preventDefault();

    emailjs
      .sendForm('service_rziz83b', 'template_96tg6s9', form.current, {
        publicKey: 'M5llJ9jCGZFvcEUtE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <form ref={form} onSubmit={sendEmail}>
    <div className={style.container}>
      <div className={style.cross}>
        <button className={style.button}>X</button>
      </div>
      

      <div className={style.mailContainer}>
        <div className={style.toMail}>
          <div> <label>Email</label>
          <input type="mail" placeholder='Enter Your Email' name="user_email"/></div>
         <div className={style.ccbcc}>Cc / Bcc</div>
        </div>
      <hr className={style.hrLine}/>
      </div>

      <div className={style.subject}>
           <label>Subject</label>
          <input type="text" placeholder='Enter subject here' name="user_name"/>
        </div>
      <hr className={style.hrLine}/>

      <div className={style.textArea}>
        <textarea name="message" />
        {/* <input type="text" placeholder='Enter mail Body'/> */}
      </div>
      <hr className={style.hrLine}/>

      <div className={style.footer}>
      <input type="submit" value="Send" />
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