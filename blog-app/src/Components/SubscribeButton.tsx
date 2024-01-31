import {FormEvent, useState} from "react";
import LoadingIndicator from "./LoadingIndicator";
import {validateEmail} from "../Services/Utilities";
import {sendSubscriptionRequest} from "../Services/Client";
import {useNavigate} from "react-router-dom";

const SubscribeButton = () => {
    const [isPending, setPending] = useState(false);
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!validateEmail(email).valid) {
            alert("Email invalid, please make sure to input a valid email address")
            return
        }
        setPending(true);
        const success = await sendSubscriptionRequest(email)
        if (success) {
            navigate("/", {state: { header: "Check Your Inbox!",
                                    variant: "success",
                                    message: "Thanks for subscribing! We've sent a verification email to the address you provided. Please check your inbox (and spam folder, just in case) to complete the subscription process by clicking the verification link. Welcome aboard!" }})
        } else {
            navigate("/", {state: { header: "Oops! Something Went Wrong!",
                    variant: "danger",
                    message: "We encountered an issue sending your subscription verification email. This can sometimes happen due to technical difficulties on our end. Please try subscribing again shortly, or contact support if the problem persists. We apologize for the inconvenience and appreciate your patience." }})

        }

        setPending(false)
    }

    if (isPending) {
        return <LoadingIndicator></LoadingIndicator>
    }

    return <section className="cta-section theme-bg-light py-5">
    <div className="container text-center single-col-max-width">
        <h2 className="heading">Sandeep's Insights: From Code to Curiosities</h2>
        <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
        <div className="single-form-max-width pt-3 mx-auto">
            <form className="signup-form row g-2 g-lg-2 align-items-center" onSubmit={onSubmit}>
                <div className="col-12 col-md-9">
                    <label className="sr-only" htmlFor="semail">Your email</label>
                    <input type="email" id="semail" required={true} name="semail1" className="form-control me-md-1 semail"
                           placeholder="Enter email" onChange={ event => setEmail(event.target.value) } />
                </div>
                <div className="col-12 col-md-2">
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                </div>
            </form>
        </div>
    </div>
</section>
};

export default SubscribeButton;