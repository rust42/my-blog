import '../CSS/BlogPost.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchBlog} from "../Store/blogSlice";
import {useParams} from "react-router-dom";
import { Navigate } from "react-router-dom";
import moment from "moment";
import {AppDispatch, RootState} from "../Store/Store";
import LoadingIndicator from "./LoadingIndicator";

const BlogPost = () => {
    const [shouldRedirect, setShouldRedirect] = useState<Boolean>(false);
    const params = useParams<{blogId: string}>();
    const blogId = params.blogId;
    const blog = useSelector((selector: RootState) => selector.blog.value);
    const loadingState = useSelector((selector: RootState) => selector.blog.status);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        setShouldRedirect(blogId === undefined);
        if (blogId !== undefined) {
            dispatch(fetchBlog(blogId));
        }
    }, [dispatch]);

    if (shouldRedirect) {
        return  <Navigate to="/"></Navigate>
    }

    if (loadingState === 'loading') {
        return <LoadingIndicator />
    }
    if (blog === undefined) {
        return <></>;
    }

    return <article className="blog-post px-3 py-5 p-md-5">
        <div className="container single-col-max-width">
            <header className="blog-post-header">
                <h2 className="title mb-2">{blog.title}</h2>
                <div className="meta mb-3"><span className="date">{moment(blog.date, "DD MMM YYYY").fromNow()}</span>
                    <span className="time">5 min read</span><span className="comment"></span></div>
            </header>

            <div className="blog-post-body">
                <p>{blog.intro}</p>

                {blog && blog.sections.map(section => <div key={section.sectionTitle}>
                    <h3 className="mt-5 mb-3">{section.sectionTitle}</h3>
                    {section.image &&   <img className="img-fluid mt-3 mb-3 rounded card" src={`https://blog-json-objects.s3.amazonaws.com/content/${section.image}`}
                                             alt="image" /> }

                    <p>{section.content}  </p>
                <pre>
                    <code className="hljs language-yaml">
                        {section.code}
                    </code>

                </pre>

                </div>)}
            </div>
        </div>
    </article>
};

export default BlogPost;