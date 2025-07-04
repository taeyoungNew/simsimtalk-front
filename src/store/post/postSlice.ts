import { createSlice } from "@reduxjs/toolkit";
import { getPostsThunk } from "./postThunk";

interface Post {
  userId: string;
  title: string;
  content: string;
}

interface PostSlice {
  posts: Post[];
}

const initialState: PostSlice = {
  posts: [],
};

export const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      const posts: Post[] = action.payload.posts;
      for (let idx = 0; idx < posts.length; idx++) {
        state.posts[idx] = posts[idx];
      }
    },

    deleteMyPost: (state, action) => {
      const deleteIdx = action.payload.idx;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostsThunk.fulfilled, (state, action) => {
      if (action.payload.posts.length != 0) {
        state.posts = action.payload.posts;
      }
    });
  },
});
