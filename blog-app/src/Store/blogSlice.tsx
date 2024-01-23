import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchBlog as getBlog} from '../Services/Client';
import BlogItem from "../types/BlogItem";
import Content from "../types/Content";
import LoadingStatus from "../types/LoadingStatus";

const initialState: Content<BlogItem> = { status: LoadingStatus.idle };

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(fetchBlog.pending, (state, action) => {
            state.status = LoadingStatus.loading
            state.value = undefined
        })
        .addCase(fetchBlog.fulfilled, (state, action) => {
            state.status = LoadingStatus.succeeded;
            state.value =  action.payload;
        }).addCase(fetchBlog.rejected, (state, action) => {
            state.status = LoadingStatus.failed;
            state.error = action.error.message;
            state.value = undefined
        });
    }
});

export default blogSlice.reducer;

export const fetchBlog = createAsyncThunk('blog/fetch',
    async(blogId: string) => {
    return await getBlog(blogId);
});