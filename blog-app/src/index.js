import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from "./Blog";
import Root from "./Root";
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom';
import AboutMe from "./AboutMe";
import Contact from "./Contact";

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
                path: '/',
                element: <App />,
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
