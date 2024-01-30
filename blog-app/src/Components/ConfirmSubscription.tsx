import { redirect, useParams, useNavigate } from 'react-router-dom';
import '../CSS/ConfirmSubscription.css'
import {verifySubscription} from "../Services/Client";
import {useState} from "react";
import LoadingIndicator from "./LoadingIndicator";

const ConfirmSubscription = () => {
    const { subscriptionId } = useParams<"subscriptionId">();
    const [isRequestInProgress, setRequestInProgress] = useState(false);
    const navigate = useNavigate()

    if (subscriptionId === undefined) {
        redirect("/")
        return <></>
    }

    const submitButton = async () => {
        setRequestInProgress(true)
        const result = await verifySubscription(subscriptionId)
        setRequestInProgress(false)
        if (result) {
            navigate("/", {state: { header: "Subscription Confirmed!",
                                    variant: "success",
                                    message: "Thank you for verifying your email address. Your subscription to our newsletter is now active. Look forward to regular updates and insights delivered straight to your inbox." }})
        } else {
            navigate("/", {state: { header: "Verification Failed",
                                    variant: "danger",
                                    message: "We're sorry, but your subscription verification link has expired or is invalid. This can happen if the link has already been used or if too much time has passed since it was sent. Please request a new subscription verification from our website to continue.\n" }})
        }
    };

    if (isRequestInProgress) {
        return <LoadingIndicator></LoadingIndicator>
    }

    return  <div className='confirm-subscription'>
    <div className="container">
        <h1>Email Verification</h1>
        <p>Thank you for signing up! Please click the button below to verify your email address.</p>
        <button className="button" onClick={submitButton} >Verify Email</button>
        <div className="disclaimer">
            <p>By verifying your email, you agree to our terms of service and privacy policy.</p>
        </div>
    </div>
    </div>
};

export default ConfirmSubscription;