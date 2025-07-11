import { createSlice } from "@reduxjs/toolkit";
import { getPostsThunk } from "./postThunk";

interface Post {
  postId: number;
  userId: string;
  userNickname: string;
  title: string;
  content: string;
  likeCnt: number;
  commentCnt: number;
  Comments: [{}];
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
  extraReducers: async (builder) => {
    builder.addCase(getPostsThunk.fulfilled, (state, action) => {
      if (action.payload.posts == undefined) {
        console.log("게시물이 없음");
        return;
      }
      for (let idx = 0; idx < action.payload.posts.length; idx++) {
        state.posts[idx] = {
          postId: action.payload.posts[idx].id,
          userId: action.payload.posts[idx].userId,
          title: action.payload.posts[idx].title,
          content: action.payload.posts[idx].content,
          userNickname: action.payload.posts[idx].userNickname,
          likeCnt: action.payload.posts[idx].likeCnt,
          Comments: action.payload.posts[idx].Comments,
          commentCnt: action.payload.posts[idx].Comments.length,
        };
      }
    });
  },
});
