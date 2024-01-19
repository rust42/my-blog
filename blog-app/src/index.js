import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './Components/App';
import Blog from "./Components/Blog";
import Root from "./Components/Root";
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import BlogPost from "./Components/BlogPost";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'blog/:blogId',
                element: <BlogPost />
            },
            {
                path: '/',
                element: <App/>
            },
            {
                path: 'about',
                element: <AboutMe />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
