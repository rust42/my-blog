import '../CSS/App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchBlogs} from "../Store/blogsSlice";
import BlogItem from "./BlogItem";
import {AppDispatch, RootState} from "../Store/Store";
import LoadingIndicator from "./LoadingIndicator";

function App() {

  const blogs = useSelector((selector: RootState) => selector.blogs.value);
  const loadingState = useSelector((selector: RootState) => selector.blogs.status);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
      dispatch(fetchBlogs());
  }, [dispatch]);

  if (blogs === undefined) {
      return  <></>
  }
    if (loadingState === 'loading') {
        return <LoadingIndicator />
    }
  return (
    <div className="App">
      <section className="blog-list px-3 py-5 p-md-5">
          {blogs.map(blog => <BlogItem blog={blog} className="mb-5" key={blog.identifier}/>)}
      </section>
    </div>);
}

export default App;
