import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Provider} from "react-redux";
import { store } from "../Store/Store";
import SubscribeButton from './SubscribeButton';
import FooterView from './FooterView';

const Root = () => {
    return <Provider store={store}>
    <header className="header text-center">
        <h1 className="blog-name pt-lg-4 mb-0">
            <Link className="no-text-decoration" to="">Sandeep's
            Blog</Link></h1>

        <nav className="navbar navbar-expand-lg navbar-dark">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation"
                    aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navigation" className="collapse navbar-collapse flex-column">
                <div className="profile-section pt-3 pt-lg-0">
                    <img className="profile-image mb-3 rounded-circle mx-auto" src="/index_files/profile.png"
                         alt="image" />

                        <div className="bio mb-3">Namaste! 🌏 My name is Sandeep Koirala, and I'm thrilled to share my
                            journey with you through this blog.


                            <Link to="about">Find out more about me</Link></div>
                        <ul className="social-list list-inline py-3 mx-auto">
                            <li className="list-inline-item"><a href="https://twitter.com/k6sandeep">
                                <svg className="svg-inline--fa fa-twitter fa-fw" aria-hidden="true" focusable="false"
                                     data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512" data-fa-i2svg="">
                                    <path fill="currentColor"
                                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                </svg>
                               </a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/sandeepkoirala/">
                                <svg className="svg-inline--fa fa-linkedin-in fa-fw" aria-hidden="true"
                                     focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                    <path fill="currentColor"
                                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                </svg>
                                </a></li>
                            <li className="list-inline-item"><a href="https://github.com/skoirala">
                                <svg className="svg-inline--fa fa-github-alt fa-fw" aria-hidden="true" focusable="false"
                                     data-prefix="fab" data-icon="github-alt" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" data-fa-i2svg="">
                                    <path fill="currentColor"
                                          d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
                                </svg>
                               </a></li>
                            <li className="list-inline-item"><a href="https://stackoverflow.com/users/654666/sandeep">
                                <svg className="svg-inline--fa fa-stack-overflow fa-fw" aria-hidden="true"
                                     focusable="false" data-prefix="fab" data-icon="stack-overflow" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
                                    <path fill="currentColor"
                                          d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"></path>
                                </svg>
                                </a>
                            </li>
                        </ul>
                        <hr />
                </div>

                <ul className="navbar-nav flex-column text-start">
                    <li className="nav-item">
                        <Link className="nav-link active" to="">
                            <svg className="svg-inline--fa fa-house fa-fw me-2" aria-hidden="true" focusable="false"
                                 data-prefix="fas" data-icon="house" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512" data-fa-i2svg="">
                                <path fill="currentColor"
                                      d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
                            </svg>
                            Blog Home <span
                            className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="about">
                            <svg className="svg-inline--fa fa-user fa-fw me-2" aria-hidden="true" focusable="false"
                                 data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 448 512" data-fa-i2svg="">
                                <path fill="currentColor"
                                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                            </svg>
                            About Me</Link>
                    </li>
                </ul>

                <div className="my-2 my-md-3">
                    <Link className="btn btn-primary" to="contact">Get in Touch</Link>
                </div>
            </div>
        </nav>
    </header>

    <div className="main-wrapper">
        <div id="detail">
            <Outlet />
        </div>
        <SubscribeButton />
        <FooterView / >
    </div>

    <script src="/index_files/popper.min.js"></script>
    <script src="/index_files/bootstrap.min.js"></script>

    <div id="proctor-extension-installed"></div>
    </Provider>
};

export default Root;