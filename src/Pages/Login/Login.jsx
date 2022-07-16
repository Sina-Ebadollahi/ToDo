import React, {useRef, useState} from 'react'

import { Link } from 'react-router-dom'
import AuthField from '../../components/AuthField/AuthField'
import { RoundedRadioInput } from '../../components/Input/InputCard'


import './Login.css'
export default function Login() {
  const formRef = useRef(null);
  const [isTermAccepted, setIsTermAccepted] = useState(false);
  const [isTermsViewable, setIsTermsViewable] = useState(false);
  const reverseValueOfIsTermAccepted = () => {
    setIsTermAccepted(!isTermAccepted);
  }
  const changeTermViewable = () => {
    setIsTermsViewable(!isTermAccepted);
  }
  const handleSignUpFormSubmit= (e) => {
    e.preventDefault();
  }
  return (
      <section className="signup-container">
        <form ref={formRef} className="form" onSubmit={(e) => {handleSignUpFormSubmit(e)}}>
          <div className="auth-header-wrapper fc eachWrapper">
            <h1 className="auth-header">Login</h1>
            <h4 className="login-header">Don't have an account ? <Link to="/Signup">Sing up </Link></h4>
          </div>
          <div className="user-info-wrapper fc">

            <div className="user-email-wrapper fc eachWrapper">
              <AuthField type={"email"} w={90}>E-mail</AuthField>
            </div>
            <div className="user-password-wrapper fc eachWrapper">
              <AuthField type={"password"} w={90}>Password</AuthField>
            </div>
          </div>
          <button className="auth-btn fc" onClick={() => formRef.current.submit()}>Login</button>
        </form>
        {/* {isTermsViewable && (
            <TermsOfServiceInfo changeTermViewable={changeTermViewable} />
        )} */}

      </section>
  )
}
