import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthField from '../../components/AuthField/AuthField'
import { RoundedRadioInput } from '../../components/Input/InputCard'
import './Signup.css'
export const GetInfoAuthPage = ({}) => {
    return(
        <>

        </>
    )
}
export const TermsOfService = ({reverseValueOfIsTermAccepted, changeTermViewable, isChecked}) => {
    return(
        <div className="term-link-wrapper fc">
            <RoundedRadioInput changeCheckEvent={reverseValueOfIsTermAccepted} isChecked={isChecked} />
            <p>I have read and agree to the <span className="term-link" onClick={() => changeTermViewable()}>Terms of Service</span></p>
        </div>
    )
}
const TermsOfServiceInfo = ({ changeTermViewable }) => {

    return(
        <div className="term-container fc">
            <div className="close-container">
                <button className="close-term" onClick={() => changeTermViewable()}>close</button>
            </div>
            <div className="terms-info">
                <p>Lorem ipsum dolor sit amet, consectetur <br />  adipisicing elit. Modi quibusdam nihil <br /> quae fugiat quidem ipsam consequatur molestiae<br /> eum cumque perspiciatis molestias nostrum <br />repudiandae reiciendis distinctio totam <br />recusandae, adipisci mollitia? Rem totam <br />placeat quos eveniet at nemo <br />corrupti sequi eum error!</p>
            </div>
        </div>
    )
}
export default function Signup() {
    const formRef = useRef(null);
    const [isTermAccepted, setIsTermAccepted] = useState(false);
    const [isTermsViewable, setIsTermsViewable] = useState(false);
    const reverseValueOfIsTermAccepted = () => {
        setIsTermAccepted(!isTermAccepted);
    }
    const changeTermViewable = () => {
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
            <TermsOfService isChecked={isTermAccepted} changeTermViewable={changeTermViewable} reverseValueOfIsTermAccepted={reverseValueOfIsTermAccepted} />
        </form>
        {isTermsViewable && (
            <TermsOfServiceInfo changeTermViewable={changeTermViewable} />
        )}

    </section>
  )
}
