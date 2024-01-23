import '../CSS/ConfirmSubscription.css'

const ConfirmSubscription = () => {
    return  <div className='confirm-subscription'>
    <div className="container">
        <h1>Email Verification</h1>
        <p>Thank you for signing up! Please click the button below to verify your email address.</p>
        <button className="button" >Verify Email</button>
        <div className="disclaimer">
            <p>By verifying your email, you agree to our terms of service and privacy policy.</p>
        </div>
    </div>
    </div>
};

export default ConfirmSubscription;