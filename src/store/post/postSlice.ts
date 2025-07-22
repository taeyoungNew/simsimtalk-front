import { createSlice } from "@reduxjs/toolkit";
import { createPostThunk, getPostsThunk } from "./postThunk";

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

// const createPostInittialState: getAllPostsSlice = {
//   posts: [],
// };

export const createPostSlice = createSlice({
  name: "Post/createPost",
  initialState: getAllPostsInitialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder.addCase(createPostThunk.fulfilled, (state, action) => {
      if (!action.payload) return;
      // 새 게시물을 posts 배열 맨 앞에 추가 (최신순 가정)
      state.posts.unshift({
        id: action.payload.id,
        userId: action.payload.userId,
        title: action.payload.title,
        content: action.payload.content,
        userNickname: action.payload.userNickname,
        likeCnt: action.payload.likeCnt,
        Comments: action.payload.Comments,
        commentCnt: action.payload.Comments.length,
      });
    });
  },
});

export const getAllPostsSlice = createSlice({
  name: "Post/getAllPosts",
  initialState: getAllPostsInitialState,

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
    builder
      .addCase(getPostsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        if (!action.payload) return;

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
  },
});
