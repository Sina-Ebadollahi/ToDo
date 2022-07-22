import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_Details } from '../../APIUtility'
import AuthField from '../../components/AuthField/AuthField'
import Error from '../../components/Error/Error'
import InfoCard from '../../components/InfoCard/InfoCard'
import { RoundedRadioInput } from '../../components/Input/InputCard'
import useData from '../../Hooks/useData'
import useFetch from '../../Hooks/useFetch'
import './Signup.css'
export const TermsOfService = ({reverseValueOfIsTermAccepted, changeTermViewable, isChecked}) => {
    return(
        <div className="term-link-wrapper fc">
            <RoundedRadioInput changeCheckEvent={reverseValueOfIsTermAccepted} isChecked={isChecked} />
            <p>I have read and agree to the <span className="term-link" onClick={() => changeTermViewable()}>Terms of Service</span></p>
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
    const { fetchDataFunction, data, requestError , isPending } = useFetch();
    const { handleSignUpUpdate } = useData()
    const formRef = useRef(null);
    const [error, setError] = useState({errorMessage: "", errorInfo: ""});
    const [isTermAccepted, setIsTermAccepted] = useState(false);
    const [isTermsViewable, setIsTermsViewable] = useState(false);
    const [userSignUpInfo, setUserSignUpInfo] = useState({fName: "", lName: "", email: "", password: ""});
    const nav = useNavigate()
    const reverseValueOfIsTermAccepted = () => {
        setIsTermAccepted(!isTermAccepted);
    }
    const changeTermViewable = () => {
        setIsTermsViewable(!isTermsViewable);
    }
    const handleSignUpFormSubmit = () => {
        if(userSignUpInfo.fName === "" || userSignUpInfo.fName.trim() === ""){
            setError({errorMessage: "Enter Your First Name Please!", errorInfo: ""});
            return;
        }
        if(userSignUpInfo.lName === "" || userSignUpInfo.lName.trim() === ""){
            setError({errorMessage: "Enter Your Last Name Please!", errorInfo: ""});
            return;
        }
        if(userSignUpInfo.email === "" || userSignUpInfo.email.trim() === "" || !userSignUpInfo.email.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            setError({errorMessage:"Please enter you email!", errorInfo: "e.g : todoapp@gmail.com"})
            return;
        }
        if(userSignUpInfo.lName === "" || userSignUpInfo.lName.trim() === "" || !userSignUpInfo.password.trim().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
            setError({errorMessage: "Please enter your password", errorInfo:"make sure to use charachters like '!@#$%' and use numbers too and the length must be more than 6 charachters."})    
            return
        }
        if(error.errorMessage !== "" || !error.errorMessage){
            setError({errorInfo: "", errorMessage:""});
        }
        if(!isTermAccepted){
            setError({errorMessage:'Please read terms of service and accept it.'})
            return;
        }
        // implementing request
        fetchDataFunction(`${API_Details.endpoint}${API_Details.resourse[0]}`,'POST',null,{
            firstName: userSignUpInfo.fName,
            lastName: userSignUpInfo.lName,
            email: userSignUpInfo.email,
            password: userSignUpInfo.password,
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/722.jpg",
            "isEmailConfirmed": false,
            "createdAt": new Date().toJSON(),
               
        })
        .then(() => {
            console.log(data.reqStatus, data.reqData);
            if(requestError){
                setError({errorMessage: requestError, errorInfo: ""});
            }
            if(data.reqStatus === 201 && data.reqData && data.reqData.reqStatus === "created"){
                nav('/')
            }
        })
        
    } 

    // change values
    const changeEmailValue = (email) => {
        setUserSignUpInfo({...userSignUpInfo, email});
    }
    const changeFirstNameValue = (firstName) => {
        console.log("in");
        setUserSignUpInfo({...userSignUpInfo, fName: firstName});
    }
    const changeLastNameValue = (lastName) => {
        setUserSignUpInfo({...userSignUpInfo, lName: lastName});
    }
    const changePasswordValue = (password) => {
        setUserSignUpInfo({...userSignUpInfo, password});
    }
    // page unmounts
    useEffect(() => {
        return () => {
            setUserSignUpInfo({fName: "", lName: "", email: "", password: ""});
            setError({errorMessage: "", errorInfo: ""});
             setIsTermAccepted(false);
             setIsTermsViewable(false);
        }
    },[])
  return (
    <section className="signup-container">
        <form ref={formRef} className="form" >
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
            {isTermAccepted && (<div onClick={() => handleSignUpFormSubmit()}  className="auth-btn fc" >Sign up</div>)}
            {!isTermAccepted && (<div onClick={() => handleSignUpFormSubmit()} disabled className="auth-btn fc disabledbtn" >Sign up</div>)}
            <TermsOfService isChecked={isTermAccepted} changeTermViewable={changeTermViewable} reverseValueOfIsTermAccepted={reverseValueOfIsTermAccepted} />
            {error.errorMessage && error.errorMessage !== "" && <Error errorInfo={error.errorInfo} errorMessage={error.errorMessage} />}
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
