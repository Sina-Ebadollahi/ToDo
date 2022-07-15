import React, { useState } from 'react'
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
    const [isTermAccepted, setIsTermAccepted] = useState(false);
    const reverseValueOfIsTermAccepted = () => {
        setIsTermAccepted(!isTermAccepted);
    }
  return (
    <div className="signup-container">
        <form className="form">
            <div className="auth-header-wrapper fc">
                <h1 className="auth-header">Create account</h1>
                <h4 className="login-header">Already have an account ? <Link to="/Login"> Sign in</Link></h4>
            </div>
            <div className="user-info-wrapper fc">
                <div className="first-last-container fc">
                    <AuthField w={50}>First name</AuthField>
                    <AuthField w={50}>Last name</AuthField>
                </div>
            </div>
            <button className="auth-btn fc">Sign up</button>
            <TermsOfService reverseValueOfIsTermAccepted={reverseValueOfIsTermAccepted} />
        </form>

    </div>
  )
}
