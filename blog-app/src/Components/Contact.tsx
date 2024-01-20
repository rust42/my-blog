import '../CSS/Contact.css'
const Contact = () => {
    return <div className="form-container">
        <div className="contact-form">

        <h2>Contact Me</h2>
        <form action="your-server-side-script" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
                <div className="validation-message" id="name-validation">
                </div>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <div className="validation-message" id="email-validation">

                </div>

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
                <div className="validation-message" id="message-validation">
                </div>
                <button type="submit">Send Message</button>
        </form>
    </div>
    </div>
};

export default Contact;