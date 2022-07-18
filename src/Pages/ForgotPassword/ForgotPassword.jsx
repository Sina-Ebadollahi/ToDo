import React, { useRef, useState } from 'react'
import AuthField from '../../components/AuthField/AuthField'
import { AuthHeader } from '../Signup/Signup'
import './ForgotPassword.css'
export default function ForgotPassword() {
    const formRef = useRef(null);
    const [isEmailResetConfirmedByServer, setIsEmailResetConfirmedByServer] = useState(false);



    const handleForgotPasswordFormSubmit = (e) => {
        e.preventDefault();

    }
  return (
    <section className="signup-container">
        <form onSubmit={(e) => handleForgotPasswordFormSubmit(e)} ref={formRef} className="form">
            <AuthHeader header={"Password Reset"} />
            {!isEmailResetConfirmedByServer && (
            <>
                <div className="user-email-wrapper fc eachWrapper">
                        <AuthField type={"email"} w={90}>E-mail</AuthField>
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
