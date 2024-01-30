import {FormEvent, useState} from "react";
import LoadingIndicator from "./LoadingIndicator";
import {validateEmail} from "../Services/Utilities";
import {sendSubscriptionRequest} from "../Services/Client";

const SubscribeButton = () => {
    const [isPending, setPending] = useState(false);
    const [email, setEmail] = useState("")
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!validateEmail(email).valid) {
            alert("Email invalid, please make sure to input a valid email address")
            return
        }
        setPending(true);
        await sendSubscriptionRequest(email)
        setPending(false)
    }

    if (isPending) {
        return <LoadingIndicator></LoadingIndicator>
    }

    return <section className="cta-section theme-bg-light py-5">
    <div className="container text-center single-col-max-width">
        <h2 className="heading">Sandeep's Blog - Code, Grow, Connect</h2>
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