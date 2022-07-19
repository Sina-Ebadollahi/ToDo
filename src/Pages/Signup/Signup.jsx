import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthField from '../../components/AuthField/AuthField'
import InfoCard from '../../components/InfoCard/InfoCard'
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
                <button className="close-term" onClick={(e) => changeTermViewable()}>close</button>
            </div>
            <div className="terms-info">
                <p>Lorem ipsum dolor sit amet, consectetur <br />  adipisicing elit. Modi quibusdam nihil <br /> quae fugiat quidem ipsam consequatur molestiae<br /> eum cumque perspiciatis molestias nostrum <br />repudiandae reiciendis distinctio totam <br />recusandae, adipisci mollitia? Rem totam <br />placeat quos eveniet at nemo <br />corrupti sequi eum error!</p>
            </div>
        </div>
    )
}
export const AuthHeader = ({header, info, infoNav }) => {
    return(
        <div className="auth-header-wrapper fc eachWrapper">
                <h1 className="auth-header">{header}</h1>
                {info && infoNav && <h4 className="login-header">{info}<Link to={`/${infoNav}`}> {infoNav}</Link></h4>}
            </div>
    )
}
export default function Signup() {
    const formRef = useRef(null);
    const [error, setError] = useState("");
    const [isTermAccepted, setIsTermAccepted] = useState(false);
    const [isTermsViewable, setIsTermsViewable] = useState(false);
    const [userSignUpInfo, setUserSignUpInfo] = useState({fName: "", lName: "", email: "", password: ""});
    const reverseValueOfIsTermAccepted = () => {
        setIsTermAccepted(!isTermAccepted);
    }
    const changeTermViewable = () => {
        setIsTermsViewable(!isTermsViewable);
    }
    const handleSignUpFormSubmit= (e) => {
        e.preventDefault();
    } 

    // change values
    const changeEmailValue = (email) => {
        setUserSignUpInfo({...userSignUpInfo, email});
    }
    const changeFirstNameValue = (firstName) => {
        setUserSignUpInfo({...userSignUpInfo, fName: firstName});
    }
    const changeLastNameValue = (lastName) => {
        setUserSignUpInfo({...userSignUpInfo, lName: lastName});
    }
    const changePasswordValue = (password) => {
        setUserSignUpInfo({...userSignUpInfo, password});
    }
  return (
    <section className="signup-container">
        <form ref={formRef} className="form" onSubmit={(e) => {handleSignUpFormSubmit(e)}}>
            <AuthHeader header={"Create account"} info={"Already have an account ? "} infoNav={"Login"} />
            <div className="user-info-wrapper fc">
                <div className="first-last-container fc eachWrapper">
                    <AuthField changeValue={changeFirstNameValue} w={40}>First name</AuthField>
                    <AuthField changeValue={changeLastNameValue} w={40}>Last name</AuthField>
                </div>
                <div className="user-email-wrapper fc eachWrapper">
                    <AuthField changeValue={changeEmailValue} type={"email"} w={90}>E-mail</AuthField>
                </div>
                <div className="user-password-wrapper fc eachWrapper">
                    <AuthField changeValue={changePasswordValue} type={"password"} w={90}>Password</AuthField>
                </div>
            </div>
            <button className="auth-btn fc" onClick={() => formRef.current.submit()}>Sign up</button>
            <TermsOfService isChecked={isTermAccepted} changeTermViewable={changeTermViewable} reverseValueOfIsTermAccepted={reverseValueOfIsTermAccepted} />
            {}
        </form>
        {isTermsViewable && (
            <InfoCard changeShowState={changeTermViewable}>
                <p className="terms-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nisi tempora ratione quae quis quibusdam! Consequatur, repellendus, cupiditate nemo quo velit optio repudiandae nisi nobis esse at placeat, animi necessitatibus harum nihil error maiores laborum quam. Ab earum minima aspernatur.
                </p>
            </InfoCard>
        )}

    </section>
  )
}
