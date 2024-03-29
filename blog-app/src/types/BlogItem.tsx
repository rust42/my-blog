import BlogSection from "./BlogSection";

interface BlogItem {
    title: string
    author: string
    date: number
    intro: string
    image?: string
    sections: BlogSection[]
}

export default BlogItem;
