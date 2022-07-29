import React, { useRef, useState } from 'react'
import AuthField from '../../components/AuthField/AuthField'
import { AuthHeader } from '../Signup/Signup'
import { API_Details } from '../../APIUtility'
import './ForgotPassword.css'
import useFetch from '../../Hooks/useFetch'
import { useNavigate } from 'react-router-dom'
export default function ForgotPassword() {
    const nav = useNavigate()
    const { data, fetchDataFunction, isPending, requestError} = useFetch()
    const [error, setError] = useState({errorMessage: "", errorInfo: ""});
    const [isEmailResetConfirmedByServer, setIsEmailResetConfirmedByServer] = useState(false);
    const [emailValue, setEmailValue] = useState("");


    const changeEmailValue = (email) => {
        setEmailValue(email);
    }
    const handleForgotPasswordFormSubmit = (e) => {
        e.preventDefault();
        // setIsEmailResetConfirmedByServer(true);
        if(emailValue === "" || emailValue.trim() === "" || !emailValue.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            setError({errorMessage:"Please enter you email!", errorInfo: "e.g : todoapp@gmail.com"})
            return;
        }
        if(error.errorMessage !== "" || !error.errorMessage){
            setError({errorInfo: "", errorMessage:""});
        }
        // api
        fetchDataFunction(`${API_Details.endpoint}${API_Details.resourse[1]}`,'GET',null,{
            email : emailValue,
            
               
        })
        .then(() => {
            console.log(data.reqStatus, data.reqData);
            if(requestError){
                setError({errorMessage: requestError, errorInfo: ""});
            }
            if(data.reqStatus === 200){
              //implementing reducer update
                nav('/')
                setIsEmailResetConfirmedByServer(true);
                
            }else if(data.reqStatus >= 300){
              setError({ errorInfo: "email doesn't found!"});
            }

        })
    }
  return (
    <section className="signup-container">
        <form onSubmit={(e) => handleForgotPasswordFormSubmit(e)} className="form">
            <AuthHeader header={"Password Reset"} />
            {!isEmailResetConfirmedByServer && (
            <>
                <div className="user-email-wrapper fc eachWrapper">
                        <AuthField changeValue={changeEmailValue} type={"email"} w={90}>E-mail</AuthField>
                </div>
                <button className="auth-btn fc" >Reset Password</button>
            </>
            )}
            {
                isEmailResetConfirmedByServer &&
                (
                    <>
                        <h1 className="pass-reset-confirmed">
                            password reset email has been sent.
                            check your mail!
                        </h1>
                    </>
                )
            }
        </form>
    </section>
  )
}
