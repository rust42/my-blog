import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchBlogs as getBlogs} from './Client';

const initialState = {
    status: 'idle',
    blog: {}
};

const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchBlogs.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.blog =  action.payload;
        }).addCase(fetchBlogs.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});

export default blogsSlice.reducer;

export const fetchBlogs = createAsyncThunk('blogs/fech', async() => {
    return await getBlogs();
});