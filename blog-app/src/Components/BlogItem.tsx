import { Link } from "react-router-dom";
import Blog from "../types/Blog";
import React from "react";
import { imageURL } from '../Services/Utilities'
import moment from "moment/moment";

type Props = {
    blog: Blog,
    className: string
};
const BlogItem: React.FC<Props> = (props) => {
    const blog = props.blog;
    return <div className="container single-col-max-width">
    <div className="item mb-5">
        <div className="row g-3 g-xl-0 mb-5">
            <div className="col-2 col-xl-3">
                <img className="img-fluid post-thumb " src={imageURL(blog.image)} alt="" />
            </div>
            <div className="col">
                <h3 className="title mb-1">
                    <Link to={`blog/${blog.identifier}`} className="text-link">{blog.title}</Link></h3>
                <div className="meta mb-1">
                    <span className="date">Published {moment(blog.date, "YYYY-MM-DD").fromNow()}</span>
                </div>
                <div className="intro">{blog.detail}
                </div>
                <Link to={`blog/${blog.identifier}`} className="text-link">
                Read
                more →
                </Link>
            </div>
        </div>
    </div>
    </div>
};

export default BlogItem;