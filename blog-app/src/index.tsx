import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './Components/App';
import Root from "./Components/Root";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import BlogPost from "./Components/BlogPost";
import ConfirmSubscription from "./Components/ConfirmSubscription";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: 'blog/:title',
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
    },
    {
        path: '/subscription/:subscriptionId',
        element: <ConfirmSubscription />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

