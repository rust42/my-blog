import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchBlog as getBlog} from '../Services/Client';

const initialState = {
    status: 'idle',
    blog: {}
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers(builder) {
        builder.addCase(fetchBlog.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchBlog.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.blog =  action.payload;
        }).addCase(fetchBlog.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});

export default blogSlice.reducer;

export  const  { reset } = blogSlice.actions;
export const fetchBlog = createAsyncThunk('blog/fetch',
    async({ blogId }) => {
    return await getBlog(blogId);
});