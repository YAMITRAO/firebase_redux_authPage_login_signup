import React, {  useState } from 'react'
import { Form, Button} from 'react-bootstrap'
import AlertMsg from './AlertMsg'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const BootAuth = (props) => {

    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwcYCFrLAPoOvfWZN6fmD6d8Luyojx3Fw'

    const [emailInput, setEmailInput] = useState("")
    const [passInput, setPassInput] = useState("")
    const [rePassInput, setRePassInput] = useState("");
    const [isAuthSuccess, setIsAuthSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("error");
    const [inputError, setInputError] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(emailInput);
        console.log(passInput);
        console.log(rePassInput);

        if(passInput !== rePassInput){
            setInputError("Password Mismatch");
            setTimeout( () => { setInputError("")}, 2000);
            return
        }

        signUpFireBaseApi(emailInput, passInput);

        setEmailInput("");
        setPassInput("");
        setRePassInput("");
    }

    const signUpFireBaseApi = async(email, pass) =>{
        try{
          const response = await fetch(url, {
            method:"POST",
            body:JSON.stringify({
              email:email,
              password:pass,
              returnSecureToken:true,
            }),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          console.log("response data is");
          console.log(response);
          if(!response.ok){
            const data = await response.json();
            console.log(data);
            setErrorMsg(data.error.message);
            throw new Error(data.error.message);
          }
          const data = await response.json();
          console.log(data);
          setIsAuthSuccess(true);
          setTimeout( ( ) => { setIsAuthSuccess(false)}, 2000)
        }
        catch(error){
            setIsError(true);
          console.log("AUTH_ERROR", error);
           
          setTimeout( () => { setIsError(false)}, 2000)
        }
      }


  return 
    <>
      {isAuthSuccess && <AlertMsg title={"Success Auth"} message={"Congrts! You have Successfully SignUp..."} variant={"success"}/> } 
      {isError && <AlertMsg title={"SIGNUP_ERROR"} message={errorMsg} variant={"danger"}/> } 
    <Form className='m-5' onSubmit={ formSubmitHandler } >
        <h1>SignUp</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmailInput(e.target.value)} value={emailInput} required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassInput(e.target.value)} value={passInput} required minLength={6}/>
        <Form.Text className="text-muted">
          Never share your password with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label>Re-enter Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e) => setRePassInput(e.target.value)} value={rePassInput} required minLength={6}/>
      </Form.Group
      >
       {inputError && <Alert dismissible className="mt-2" variant='danger'>
        {inputError}
    </Alert>}
      
      <Button variant="primary" type="submit">
        SignUp
      </Button>
      <p>Have an Account <Link to="/">Login</Link></p>
    </Form>
    </>
  
}

export default BootAuth