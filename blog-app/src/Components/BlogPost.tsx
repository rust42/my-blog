import '../CSS/BlogPost.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchBlog} from "../Store/blogSlice";
import {useParams} from "react-router-dom";
import { Navigate } from "react-router-dom";
import moment from "moment";
import {AppDispatch, RootState} from "../Store/Store";
import LoadingIndicator from "./LoadingIndicator";
import { ContentCode, ContentDescription, ContentImage, isCode, isDescription, isImage } from '../types/BlogSection';
import CodeBlock from './CodeBlock';
import Markdown from 'react-markdown'
import ImageModal from "./ImageModal";


const BlogPost = () => {
    const [shouldRedirect, setShouldRedirect] = useState<Boolean>(false);
    const { title } = useParams<"title">();
    const blog = useSelector((selector: RootState) => selector.blog.value);
    const loadingState = useSelector((selector: RootState) => selector.blog.status);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        setShouldRedirect(title === undefined);
        if (title !== undefined) {
            dispatch(fetchBlog(title));
        }
    }, [dispatch, title]);

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
                <div className="meta mb-3"><span className="date">{moment(blog.date, "YYYY-MM-DD").fromNow()}</span>
                    <span className="time">5 min read</span><span className="comment"></span></div>
            </header>

            <div className="blog-post-body">
                {blog.image && <img className="img-fluid mt-3 mb-3 rounded card blog-image"
                                    src={`https://blog-json-objects.s3.amazonaws.com/content/${blog.image}`} alt="" />}

                <p>{blog.intro}</p>
                {blog && blog.sections.map(section => <div key={section.title}>
                    <h3 className="mt-5 mb-3">{section.title}</h3>
                    {section.contents.map(content => <Content content={content} key={`${content.id}`} />)}

                </div>)}
            </div>
        </div>
    </article>
};

export default BlogPost;


type Props = {
        key: string,
        content: (ContentCode | ContentDescription | ContentImage),
};

const Content: React.FC<Props> = (props: Props) => {
    const { content } = props;

    if (isCode(content)) {
        return <pre>
            <CodeBlock {...content} />
        </pre>;
    }

    if (isDescription(content)) {

        return <div className='ml-2'>
            {content.title && <h5 className="title mb-2">{content.title}</h5>}

            <Markdown>{content.description}</Markdown>
         </div>
    }

    if (isImage(content)) {
        return <ImageModal imageUrl={`https://blog-json-objects.s3.amazonaws.com/content/${content.image}`} modalTitle={content.modalTitle} />
    }

    console.error("No such type of object supported yet ", content);
    return <></>
}
