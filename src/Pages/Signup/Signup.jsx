import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthField from '../../components/AuthField/AuthField'
import './Signup.css'
export const GetInfoAuthPage = ({}) => {
    return(
        <>

        </>
    )
}
export const TermsOfService = ({reverseValueOfIsTermAccepted}) => {
    return(
        <div className="fc">
            <input onChange={(e) => reverseValueOfIsTermAccepted()} type="checkbox" name="" id="" />
            <p>I have read and agree to the <span className="term-link">Terms of Service</span></p>
        </div>
    )
}
export default function Signup() {
    const formRef = useRef(null);
    const [isTermAccepted, setIsTermAccepted] = useState(false);
    const reverseValueOfIsTermAccepted = () => {
        setIsTermAccepted(!isTermAccepted);
    }
    const handleSignUpFormSubmit= (e) => {
        e.preventDefault();
    } 
  return (
    <section className="signup-container">
        <form ref={formRef} className="form" onSubmit={(e) => {handleSignUpFormSubmit(e)}}>
            <div className="auth-header-wrapper fc eachWrapper">
                <h1 className="auth-header">Create account</h1>
                <h4 className="login-header">Already have an account ? <Link to="/Login"> Sign in</Link></h4>
            </div>
            <div className="user-info-wrapper fc">
                <div className="first-last-container fc eachWrapper">
                    <AuthField w={40}>First name</AuthField>
                    <AuthField w={40}>Last name</AuthField>
                </div>
                <div className="user-email-wrapper fc eachWrapper">
                    <AuthField type={"email"} w={90}>E-mail</AuthField>
                </div>
                <div className="user-password-wrapper fc eachWrapper">
                    <AuthField type={"password"} w={90}>Password</AuthField>
                </div>
            </div>
            <button className="auth-btn fc" onClick={() => formRef.current.submit()}>Sign up</button>
            <TermsOfService reverseValueOfIsTermAccepted={reverseValueOfIsTermAccepted} />
        </form>

    </section>
  )
}
