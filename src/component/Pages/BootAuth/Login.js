import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import AlertMsg from './AlertMsg';

const Login = (props) => {

    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDwcYCFrLAPoOvfWZN6fmD6d8Luyojx3Fw';
    
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [isAuthSuccess, setIsAuthSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Error");
  
    const loginApi = async(email,pass) => {
        try{
        const response = await fetch(url,{
          method:"POST",
          body:JSON.stringify({
            email:email,
            password:pass,
            returnSecureToken:true,
          })
        })
    
        if(!response.ok){
          const data = await response.json();
            console.log(data);
            setErrorMsg(data.error.message);
            throw new Error(data.error.message);
        }
         
        const data = await response.json();
        console.log(data)
        setIsAuthSuccess(true);
        //   setTimeout( ( ) => { setIsAuthSuccess(false)}, 2000)
        
      }
      catch(error){
        setIsError(true);
        console.log("AUTH_ERROR", error);
        setTimeout( () => { setIsError(false)}, 2000)
      }
      }

      const loginSubmitHandler = (e) => {
        e.preventDefault();
         loginApi(emailInput, passInput);
         setEmailInput("");
         setPassInput("");
      }

  return (
    <>
     {isAuthSuccess && <AlertMsg title={"Success Auth"} message={"SuccessFully Login..."} variant={"success"}/> } 
      {isError && <AlertMsg title={"LOGIN_ERROR"} message={errorMsg} variant={"danger"}/> } 
    <Form className='m-5'  onSubmit={ loginSubmitHandler}>
        <h1>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmailInput(e.target.value)} value={emailInput} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassInput(e.target.value)} value={passInput} required minLength={6}/>
        <Form.Text className="text-muted">
          Never share your password with anyone else.
        </Form.Text>
      </Form.Group>

       {/* {inputError && <Alert dismissible className="mt-2" variant='danger'>
        {inputError}
    </Alert>} */}
      
      <Button variant="primary" type="submit">
        LogIn
      </Button>
      <p className='mt-2'>Don't Have an Account <a href="#" onClick={()=>props.onsetPage()}>SignUp</a></p>
    </Form>
    </>
  )
}

export default Login