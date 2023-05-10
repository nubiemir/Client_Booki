import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isCreatePost: false
}

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers:{
        toggleCreatePost: (state) => {
            state.isCreatePost = !state.isCreatePost
        }
    }
})


export const {toggleCreatePost} = blogSlice.actions;
export default blogSlice.reducer