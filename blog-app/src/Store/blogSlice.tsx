import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchBlog as getBlog} from '../Services/Client';
import BlogItem from "../types/BlogItem";
import Content from "../types/Content";

const initialState: Content<BlogItem> = { status: 'idle' };

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(fetchBlog.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchBlog.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value =  action.payload;
        }).addCase(fetchBlog.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});

export default blogSlice.reducer;

export const fetchBlog = createAsyncThunk('blog/fetch',
    async(blogId: string) => {
    return await getBlog(blogId);
});