import {configureStore} from "@reduxjs/toolkit";
import BlogsSlice from "./blogsSlice";
import BlogSlice from "./blogSlice";

export const store = configureStore({
    reducer: { blogs: BlogsSlice, blog: BlogSlice }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
