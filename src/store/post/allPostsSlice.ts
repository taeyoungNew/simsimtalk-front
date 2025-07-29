import { createSlice } from "@reduxjs/toolkit";
import { getPostsThunk } from "./allPostsThunk";
import { deletePostThunk } from "./PostDetailThunk";

interface IsLastIsLoading {
  isLoading: boolean;
  isLast: boolean;
}
interface Post {
  id: number;
  userId: string;
  userNickname: string;
  title: string;
  content: string;
  likeCnt: number;
  commentCnt: number;
  Comments: [{}];
}

interface getAllPostsSlice {
  posts: Post[];
}

const getAllPostsInitialState: getAllPostsSlice & IsLastIsLoading = {
  posts: [],
  isLoading: false,
  isLast: false,
};

export const getAllPostsSlice = createSlice({
  name: "post/getAllPosts",
  initialState: getAllPostsInitialState,

  reducers: {
    setPosts: (state, action) => {
      const posts: Post[] = action.payload.posts;
      for (let idx = 0; idx < posts.length; idx++) {
        state.posts[idx] = posts[idx];
      }
    },

    addPostToAllPosts: (state, action) => {
      state.posts.unshift(action.payload);
    },

    deleteMyPost: (state, action) => {
      const deleteIdx = action.payload.idx;
    },
  },
  extraReducers: async (builder) => {
    builder
      .addCase(getPostsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.isLoading = false;
        for (let idx = 0; idx < action.payload.posts.length; idx++) {
          state.posts.push({
            id: action.payload.posts[idx].id,
            userId: action.payload.posts[idx].userId,
            title: action.payload.posts[idx].title,
            content: action.payload.posts[idx].content,
            userNickname: action.payload.posts[idx].userNickname,
            likeCnt: action.payload.posts[idx].likeCnt,
            Comments: action.payload.posts[idx].Comments,
            commentCnt: action.payload.posts[idx].Comments.length,
          });
        }
        state.isLoading = false;
      });
    builder.addCase(deletePostThunk.fulfilled, (state, action) => {});
  },
});
