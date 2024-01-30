type ValidationResult = {valid: false, error: string} | { valid: true }

export type ContactForm = { name: string, email: string, message: string };
type ContactFormValidationResult = { name: ValidationResult, email: ValidationResult, message: ValidationResult };

const imageURL = (imageIdentifier?: string) => {
    return `https://blog-json-objects.s3.amazonaws.com/content/${imageIdentifier}`
}

const validateForm = (form: ContactForm): ContactFormValidationResult => {
    return {
        name: validateName(form.name),
        email: validateEmail(form.email),
        message: validateMessage(form.message)
    }
};

const validateName = (name: string): ValidationResult => {
    if (name.length < 1) {
        return { valid: false, error: "Name cannot be empty" }
    }
    if (!name.match(/^[a-zA-Z\s]+$/)) {
        return { valid: false, error: "Name must contain only letters" }
    }
    return { valid: true };
}

const validateEmail = (email: string): ValidationResult => {
    if (email.length < 1) {
        return { valid: false, error: "Email cannot be empty" }
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return { valid: false, error: "Email is not valid" }
    }
    return { valid: true };
}

const validateMessage = (message: string): ValidationResult => {
    if (message.length < 1) {
        return { valid: false, error: "Message cannot be empty" }
    }
    return { valid: true };
}

export { imageURL, validateForm, validateEmail };