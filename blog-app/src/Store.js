import {configureStore} from "@reduxjs/toolkit";
import BlogsSlice from "./BlogsSlice";

export const store = configureStore({
    reducer: { blogs: BlogsSlice }
});