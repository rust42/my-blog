
const baseUrl = "https://blog-json-objects.s3.amazonaws.com/content";

const fetchBlogs = async () => {
    const response = await fetch(`${baseUrl}/all_posts.json`);
    return await response.json();
};

const fetchBlog = async (postId) => {
    const response = await fetch(`${baseUrl}/posts/${postId}.json`);
    return await response.json();
};


module.exports =  { fetchBlogs, fetchBlog };
