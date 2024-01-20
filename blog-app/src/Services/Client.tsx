import Blog from "../types/Blog";
import BlogItem from "../types/BlogItem";

const baseUrl = "https://blog-json-objects.s3.amazonaws.com/content";

const fetchBlogs: () => Promise<Blog[]> = async () => {
    const response = await fetch(`${baseUrl}/all_posts.json`);
    return await response.json();
};

const fetchBlog: (postId: string) => Promise<BlogItem> = async (postId) => {
    const response = await fetch(`${baseUrl}/posts/${postId}.json`);
    return await response.json();
};

export { fetchBlogs, fetchBlog };
