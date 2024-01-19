import {configureStore} from "@reduxjs/toolkit";
import BlogsSlice from "./blogsSlice";
import BlogSlice from "./blogSlice";

export const store = configureStore({
    reducer: { blogs: BlogsSlice, blog: BlogSlice }
});