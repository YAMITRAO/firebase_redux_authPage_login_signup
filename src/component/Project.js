import React, { useState } from 'react'
// import SignUp from './Pages/SignUp'
import BootAuth from './Pages/BootAuth/BootAuth'
import Login from './Pages/BootAuth/Login'
import Mail from './Pages/Mail/Mail';
import MailData from './Pages/Inbox/MailData'
import Inbox from './Pages/Inbox/Inbox';
import SentMail from './Pages/SentMail/SentMail';
import InboxLayout from './InboxLayout/InboxLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SentLayout from './InboxLayout/SentLayout';
import ShowMail from './Pages/ShowMail/ShowMail';
import ShowMailLayout from './InboxLayout/ShowMailLayout';
import DeleteLayout from './InboxLayout/DeleteLayout';




const Project = () => {
  const isMail = useSelector(state => state.authData.isAuth);
  console.log(isMail);

   const route = createBrowserRouter([
    {path:"/", element:(!isMail ? <Login/> :<InboxLayout/>)},
    {path:"/signup", element: (<BootAuth />)},
    {path:"/login", element:<Login/>},
    {path:"/inbox", element:(!isMail ? <Login/> :<InboxLayout/>)},
    {path:"/inbox:id", element:(!isMail ? <Login/> :<ShowMail/>)},
    {path:"/create_mail", element:(!isMail ? <Login/> :<Mail/>)},
    {path:"/sent", element:(!isMail ? <Login/> :<SentLayout/>)},
    {path:"/delete", element:(!isMail ? <Login/> :<DeleteLayout/>)},
    // {path:"*", element:(!isMail ? <Login/> :<ShowMailLayout/>)},
    {path:"*", element:(!isMail ? <Login/> :<ShowMailLayout/>)},
    

  ])

  return (
    <>
    <RouterProvider router={route}/>
    {/* {isMail && <InboxLayout/>}
    {!isMail && !isSignUpPage && <Login onsetPage = {ChangePage} onMailPage = {mailPage}/>}
    {!isMail && isSignUpPage && <BootAuth onsetPage = {ChangePage}/>}
    {isMail && <Mail/> } */}
    {/* <h1>Inbox</h1>
    {isMail && <Inbox/>}
    <h1>Sent Data</h1>
    {isMail && <SentMail/>} */}
    </>
  )
}

export default Project