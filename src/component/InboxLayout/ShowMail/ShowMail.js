import React from 'react'
import style from "./ShowMail.module.css"
import RightHeader from '../RightHeader/RightHeader'
import { useSelector } from 'react-redux'

const ShowMail = () => {

    const url = 'https://moviereactapp-3a393-default-rtdb.asia-southeast1.firebasedatabase.app'
    const authMail = useSelector(state => state.mail.authMail);
    let authMail1 = authMail.replace("@", "_at_").replaceAll(".", "_dot_")
    

     const putApi = async(my_data) => {
        let deleteUrl = `${url}/${authMail1}/${my_data.id}.json`
        // console.log(my_data)
        try{
            const response = await fetch(deleteUrl, {
                method:"PUT",
                body:JSON.stringify({
                    data:{
                        ...my_data,
                        label:"delete",
                    }
                   
                }),
                headers:{
                    'Content-type': "application/json"
                }
            })
            if(!response.ok){
                const data = await response.json();
                throw new Error(data.error.message);
            }
            console.log("Update succesfully at server");
            const data = await response.json();
            console.log(data);
        }
        catch(error){
            console.log("PUT_API_ERROR", error);
    
        }
    }

    const showMailData = useSelector(state => state.showData.showMailData);
    const deleteMail = () => {
        console.log(showMailData);
        putApi(showMailData);
        // console.log(authMail1);
    }
  return (
    <div className={style.container}>
        <RightHeader/>
        <div className={style.mailContainer}>
            <div className={style.fromMailID}> {showMailData.fromMailID}</div>
            <div className={style.subject}><span>Subject:</span>{showMailData.emailSubject}</div>
            <div className={style.message}><span>Message:</span>{showMailData.emailMessage}</div>
            {/* <div>{showMailData.toMailID}</div> */}
            <div className={style.buttonDelete}>
                <button onClick={ deleteMail }>Delete Mail</button>
            <button>Reply Mail</button>
            </div>
        </div>
    </div>
  )
}

export default ShowMail