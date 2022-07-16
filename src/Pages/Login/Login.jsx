import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import AuthField from '../../components/AuthField/AuthField'
import { AuthHeader } from '../Signup/Signup'
import './Login.css'
export default function Login() {
  const formRef = useRef(null);


  const handleLoginSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className="login-container fc">
      <form onSubmit={handleLoginSubmit} ref={formRef} className="form fc">
        <AuthHeader header={"Login account"} info={"Don't have an account yet ? "} infoNav={"Signup"} />
        <div className="user-info-wrapper fc">
                <div className="user-email-wrapper fc eachWrapper">
                    <AuthField type={"email"} w={90}>E-mail</AuthField>
                </div>
                <div className="user-password-wrapper fc eachWrapper">
                    <AuthField type={"password"} w={90}>Password</AuthField>
                </div>
        </div>
        <button className="auth-btn fc" onClick={() => formRef.current.submit()}>Log in</button>
        <div className="forgot-password-wrapper fc">
          <h4><Link to="/">Forgot password ?</Link></h4>
        </div>
      </form>
    </section>
  )
}
