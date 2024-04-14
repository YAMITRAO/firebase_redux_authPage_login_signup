import React, { useState } from 'react'
// import SignUp from './Pages/SignUp'
import BootAuth from './Pages/BootAuth/BootAuth'
import Login from './Pages/BootAuth/Login'
import Mail from './Pages/Mail/Mail';


const Project = () => {
  const [isSignUpPage, setIsSignUpPage] = useState(false);
  const [isMail, setIsMail] = useState(false);
  const mailPage = () => {
    setIsMail(true);
  }
   const ChangePage = () => {
    setIsSignUpPage(!isSignUpPage);
   }
  return (
  
    <>
    {!isMail && !isSignUpPage && <Login onsetPage = {ChangePage} onMailPage = {mailPage}/>}
    {!isMail && isSignUpPage && <BootAuth onsetPage = {ChangePage}/>}
    {isMail && <Mail/> }
    </>
  )
}

export default Project