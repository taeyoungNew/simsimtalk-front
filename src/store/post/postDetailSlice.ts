import { createSlice } from "@reduxjs/toolkit";
import { deletePostThunk, getPostDetailThunk } from "./postDetailThunk";

interface IsLastIsLoading {
  isLoading: boolean;
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

const postDetailInitialState: Post & IsLastIsLoading = {
  isLoading: false,
  id: 0,
  userId: "",
  userNickname: "",
  title: "",
  content: "",
  likeCnt: 0,
  commentCnt: 0,
  Comments: [{}],
};

export const getPostDetailSlice = createSlice({
  name: "post/getPostDetail",
  initialState: postDetailInitialState,
  reducers: {},

  extraReducers: async (builder) => {
    builder
      .addCase(getPostDetailThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPostDetailThunk.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.isLoading = false;
        const postDetail = action.payload;

        state.id = postDetail.id;
        state.userId = postDetail.userId;
        state.title = postDetail.title;
        state.userNickname = postDetail.userNickname;
        state.content = postDetail.content;
        state.likeCnt = postDetail.likeCnt;
        state.commentCnt = postDetail.commentCnt;
        state.Comments = postDetail.Comments;

        state.isLoading = false;
      })
      .addCase(getPostDetailThunk.rejected, (state, action) => {
        state.isLoading = false;
        return;
      });
  },
});
