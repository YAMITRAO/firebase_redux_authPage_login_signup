import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import AlertMsg from './AlertMsg';
import { useDispatch } from 'react-redux';
import { mailAction } from '../../../redux-data/mailSlice';
import { Link } from 'react-router-dom';
import { authAction } from '../../../redux-data/authSlice';


const Login = (props) => {

  const dispatch = useDispatch();
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDwcYCFrLAPoOvfWZN6fmD6d8Luyojx3Fw';
    
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [isAuthSuccess, setIsAuthSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Error");

    const urlget = 'https://moviereactapp-3a393-default-rtdb.asia-southeast1.firebasedatabase.app'
    // const loginMailID = useSelector(state =>  state.mail.authMail);

    const getApi = async(authMail) => {
        let loginMailID1 = authMail.replace("@", "_at_").replaceAll(".", "_dot_")
   
        try{
            let getUrl = `${urlget}/${loginMailID1}.json`
            console.log(getUrl);
            const response = await fetch(getUrl);
            if(!response.ok){
                const data = await response.json();
                throw new Error(data.error.message);
            }
            const data = await response.json();
            console.log(data);
            dispatch(mailAction.mailDataLoad(data));
            dispatch(authAction.authHandler());
        }
        catch(error){
            console.log("GET_API_ERROR");
        } 
    }
  
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
        
        console.log(data);
        dispatch( mailAction.authInformation(email));
        dispatch(authAction.authHandler());
        await getApi(email);
        setIsAuthSuccess(true);
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
      
      <Button variant="primary" type="submit">
        LogIn
      </Button>
      <p className='mt-2'>
        Don't Have an Account <button style={{backgroundColor:"inherit", border:"none", color:"blue"}}> <Link to="/signup">SignUp</Link></button></p>
    </Form>
    < apiToGetMailData />
    </>
  )
}

export default Login