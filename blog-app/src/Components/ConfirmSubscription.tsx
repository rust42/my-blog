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
            navigate("/")
            return
        } else {
            alert("Could not validate the request")
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