import '../CSS/BlogPost.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchBlog} from "../Store/blogSlice";
import {useParams} from "react-router-dom";
import moment from "moment";

const BlogPost = (props) => {
    const params = useParams();
    const blog = useSelector(selector => selector.blog.blog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlog({blogId: params.blogId }));
    }, [dispatch]);
    console.log(blog);

    if (blog === undefined) {
        return <></>;
    }
    if (blog.sections === undefined) {
        return <></>
    }

    return <article className="blog-post px-3 py-5 p-md-5">
        <div className="container single-col-max-width">
            <header className="blog-post-header">
                <h2 className="title mb-2">{blog.title}</h2>
                <div className="meta mb-3"><span className="date">{moment(blog.date, "DD MMM YYYY").fromNow()}</span><span className="time">5 min read</span><span className="comment"></span></div>
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