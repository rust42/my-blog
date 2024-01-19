import '../CSS/BlogPost.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchBlog, reset} from "../Store/blogSlice";
import {useParams} from "react-router-dom";

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
                <div className="meta mb-3"><span className="date">{blog.date}</span><span className="time">5 min read</span><span className="comment"></span></div>
            </header>

            <div className="blog-post-body">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>

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