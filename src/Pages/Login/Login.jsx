import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import AuthField from '../../components/AuthField/AuthField'
import InfoCard from '../../components/InfoCard/InfoCard';
import { AuthHeader } from '../Signup/Signup'
import './Login.css'
export default function Login() {
  const formRef = useRef(null);
  const [isPasswordResetComponentLoaded, setIsPasswordResetComponentLoaded] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const handleLoginSubmit = (e) => {
    e.preventDefault();
  }
  
  const changePasswordComponentVisibility = () => {
    setIsPasswordResetComponentLoaded(!isPasswordResetComponentLoaded);
  }
  const handleResetPasswordClick = (e) => {

  }
  const changeEmailValue = (email) => {
    setEmailValue(email);
  }
  const changePasswordValue = (password) => {
    setPasswordValue(password);
  }
  return (
    <section className={"login-container fc" + (isPasswordResetComponentLoaded && "page-out-of-focus")}>
      <form onSubmit={handleLoginSubmit} ref={formRef} className="form fc">
        <AuthHeader header={"Login account"} info={"Don't have an account yet ? "} infoNav={"Signup"} />
        <div className="user-info-wrapper fc">
                <div className="user-email-wrapper fc eachWrapper">
                    <AuthField changeValue={changeEmailValue} type={"email"} w={90}>E-mail</AuthField>
                </div>
                <div className="user-password-wrapper fc eachWrapper">
                    <AuthField changeValue={changePasswordValue} type={"password"} w={90}>Password</AuthField>
                </div>
        </div>
        <button className="auth-btn fc" onClick={() => formRef.current.submit()}>Log in</button>
        <div className="forgot-password-wrapper fc">
          <Link to='/ForgotPassword'><h4 >Forgot password ?</h4></Link>
        </div>
      </form>
      {/* {isPasswordResetComponentLoaded && (
        <InfoCard changeShowState={changePasswordComponentVisibility}>
          <AuthField w={80}>E-mail</AuthField>
          <button className="auth-btn fc" onClick={handleResetPasswordClick}>reset password</button>
        </InfoCard>
      )} */}
    </section>
  )
}
