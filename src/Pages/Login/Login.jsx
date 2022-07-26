import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import AuthField from '../../components/AuthField/AuthField'
import InfoCard from '../../components/InfoCard/InfoCard';
import { AuthHeader } from '../Signup/Signup'
import { API_Details } from '../../APIUtility'

import './Login.css'
import Error from "../../components/Error/Error";
import useFetch from '../../Hooks/useFetch';
export default function Login() {
  const { data, fetchDataFunction, isPending, requestError} = useFetch();
  const formRef = useRef(null);
  const [error, setError] = useState({errorMessage: "", errorInfo: ""});
  const [isPasswordResetComponentLoaded, setIsPasswordResetComponentLoaded] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const handleLoginSubmit = (e) => {
    e.preventDefault();
      if(emailValue === "" || emailValue.trim() === "" || !emailValue.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
          setError({errorMessage:"Please enter you email!", errorInfo: "e.g : todoapp@gmail.com"})
          return;
      }
      if(passwordValue === "" || passwordValue.trim() === "" || !passwordValue.trim().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
          setError({errorMessage: "Please enter your password", errorInfo:"make sure to use charachters like '!@#$%' and use numbers too."})
          return;
      }
      if(error.errorMessage !== "" || !error.errorMessage){
          setError({errorInfo: "", errorMessage:""});
      }
      // api request
      fetchDataFunction(`${API_Details.endpoint}${API_Details.resourse[0]}`,'GET',null,{
        email : emailValue,
        password: passwordValue,
        
           
    })
    .then(() => {
        console.log(data.reqStatus, data.reqData);
        if(requestError){
            setError({errorMessage: requestError, errorInfo: ""});
        }
        if(data.reqStatus === 200){
          //implementing reducer update
            nav('/')
            
        }else if(data.reqStatus === 403){
          setError({ errorInfo: "Password or username does'nt match"});
        }
    })
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
          {error.errorMessage && error.errorMessage !== "" && <Error errorInfo={error.errorInfo} errorMessage={error.errorMessage} />}
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
