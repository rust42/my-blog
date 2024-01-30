import Blog from "../types/Blog";
import BlogItem from "../types/BlogItem";
import {ContactForm} from "./Utilities";

const baseUrl = "https://blog-json-objects.s3.amazonaws.com/content";

const fetchBlogs: () => Promise<Blog[]> = async () => {
    const response = await fetch(`${baseUrl}/all_posts.json`);
    return await response.json();
};

const fetchBlog: (postId: string) => Promise<BlogItem> = async (postId) => {
    const response = await fetch(`${baseUrl}/posts/${postId}.json`);
    return await response.json();
};

const submitContactMesssage = async (formField: ContactForm) => {
    try {
        const response = await fetch("https://blog.api.k6sandeep.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formField)
        });
        return response.status === 200
    } catch {
        return false
    }
}

const sendSubscriptionRequest = async (email: string)=> {
    try {
        const response = await fetch("https://blog.api.k6sandeep.com/subscription", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });
        return response.status === 200
    } catch {
        return false
    }
}

const verifySubscription = async (subscriptionId: string)=> {
    try {
        const response = await fetch("https://blog.api.k6sandeep.com/subscription/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ identifier: subscriptionId })
        });
        return response.status === 200
    } catch {
        return false
    }
}


export { fetchBlogs, fetchBlog, submitContactMesssage, sendSubscriptionRequest, verifySubscription };
