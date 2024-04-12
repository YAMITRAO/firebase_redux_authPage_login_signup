import React, { useState } from 'react'
// import SignUp from './Pages/SignUp'
import BootAuth from './Pages/BootAuth/BootAuth'
import Login from './Pages/BootAuth/Login'


const Project = () => {
  const [isSignUpPage, setIsSignUpPage] = useState(false);
   const ChangePage = () => {
    setIsSignUpPage(!isSignUpPage);
   }
  return (
    // <SignUp />
    <>
    {isSignUpPage && <Login onsetPage = {ChangePage}/>}
    {!isSignUpPage && <BootAuth onsetPage = {ChangePage}/>}
    </>
  )
}

export default Project