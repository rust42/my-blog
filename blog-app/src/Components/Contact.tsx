import '../CSS/Contact.css'
import {FormEvent, useState} from "react";
import {ContactForm, validateForm} from "../Services/Utilities";
import {submitContactMesssage} from "../Services/Client";
import LoadingIndicator from "./LoadingIndicator";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameValidationError, setNameValidationError] = useState("");
    const [emailValidationError, setEmailValidationError] = useState("");
    const [messageValidationError, setMessageValidationError] = useState("");
    const [isRequestInProgress, setRequestInProgress] = useState(false);

    const submitForm = async (form: ContactForm) => {
        setNameValidationError("");
        setEmailValidationError("");
        setMessageValidationError("");
        return await submitContactMesssage(form)
    }

    const showAlertWithId = (id: string) => {
        const alert = document.getElementById(id);
        alert?.classList.remove("fade")
        alert?.classList.remove("hidden-alert")

        setTimeout(() => {
            alert?.classList.add('fade');
            alert?.classList.add("hidden-alert")
        }, 3000)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form: ContactForm = {name, email, message}
        const validationResult = validateForm(form);
        if (!validationResult.name.valid || !validationResult.email.valid || !validationResult.message.valid) {
            if (!validationResult.name.valid) {
                setNameValidationError(validationResult.name.error);
            }
            if (!validationResult.email.valid) {
                setEmailValidationError(validationResult.email.error);
            }

            if (!validationResult.message.valid) {
                setMessageValidationError(validationResult.message.error);
            }
            return false;
        }
        setRequestInProgress(true);

        submitForm(form).then(result => {
            setRequestInProgress(false);
            if (result) {
                setName("");
                setEmail("");
                setMessage("");
                showAlertWithId("success-alert");
            } else {
                showAlertWithId("failure-alert");
            }
        });
        return false;
    };

    return<div>
        <div id="success-alert" className="alert alert-success auto-close fade hidden-alert" role="alert">
            Thank you for reaching out. I've received your message and will get back to you as soon as possible. Your interest and time are greatly appreciated.
        </div>

        <div id="failure-alert" className="alert alert-danger auto-close fade hidden-alert" role="alert">
            Unfortunately, your message couldn't be sent at this time. Please try again later, or feel free to contact me directly at sndpkrl007@gmail.com. I apologize for the inconvenience and appreciate your understanding
        </div>

        <div className="form-container">
            <div className="contact-form">

                <h2>Contact Me</h2>
                <form action="#" method="POST" onSubmit={onSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required onChange={event => {
                        setName(event.target.value)
                    }}/>
                    {nameValidationError.length > 0 &&
                        <div className="validation-message" id="name-validation">
                            {nameValidationError}
                        </div>
                    }

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required onChange={event => {
                        setEmail(event.target.value)
                    }}/>
                    {emailValidationError.length > 0 &&
                        <div className="validation-message" id="email-validation">
                            {emailValidationError}
                        </div>
                    }

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required onChange={event => {
                        setMessage(event.target.value)
                    }}></textarea>
                    {messageValidationError.length > 0 &&
                        <div className="validation-message" id="message-validation">
                            {messageValidationError}
                        </div>
                    }
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
        {isRequestInProgress &&
        <div id="loading-overlay" className="modal-body">
            <LoadingIndicator />
        </div>
        }
    </div>
};

export default Contact;