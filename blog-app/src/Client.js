
const baseUrl = "https://blog.api.k6sandeep.com";

const fetchBlogs = async () => {
    const response = await fetch(baseUrl);
    return await response.json();
};

module.exports =  { fetchBlogs };
