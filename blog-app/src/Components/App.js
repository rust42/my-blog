import '../CSS/App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchBlogs} from "../Store/blogsSlice";
import BlogItem from "./BlogItem";

function App() {

  const selector = useSelector(selector => selector.blogs.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="App">
      <section className="blog-list px-3 py-5 p-md-5">
          {selector.map(blog => <BlogItem blog={blog} className="mb-5" key={blog.identifier}/>)}
      </section>
    </div>);
}

export default App;
