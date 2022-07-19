import React, { useRef, useState } from 'react'
import AuthField from '../../components/AuthField/AuthField'
import { AuthHeader } from '../Signup/Signup'
import './ForgotPassword.css'
export default function ForgotPassword() {
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
    }
  return (
    <section className="signup-container">
        <form onSubmit={(e) => handleForgotPasswordFormSubmit(e)} ref={formRef} className="form">
            <AuthHeader header={"Password Reset"} />
            {!isEmailResetConfirmedByServer && (
            <>
                <div className="user-email-wrapper fc eachWrapper">
                        <AuthField changeValue={changeEmailValue} type={"email"} w={90}>E-mail</AuthField>
                </div>
                <button className="auth-btn fc" onClick={() => formRef.current.submit()}>Reset Password</button>
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
