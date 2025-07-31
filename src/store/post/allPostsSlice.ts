import { createSlice } from "@reduxjs/toolkit";
import { getPostsThunk } from "./allPostsThunk";
import { deletePostThunk, modifyPostThunk } from "./postDetailThunk";
import { createCommentThunk } from "../comment/commentThunk";

interface IsLastIsLoading {
  isLoading: boolean;
  isLast: boolean;
}
interface Comment {
  id: number;
  postId: number;
  userId: string;
  userNickname: string;
  content: string;
  createAt: string;
}
interface Post {
  id: number;
  userId: string;
  userNickname: string;
  title: string;
  content: string;
  likeCnt: number;
  commentCnt: number;
  Comments: Comment[];
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

    getPosts: (state, action) => {
      state.posts;
    },

    addPostToAllPosts: (state, action) => {
      state.posts.unshift(action.payload);
    },

    deleteMyPost: (state, action) => {
      const deleteIdx = action.payload.idx;
    },

    updateCommentCnt: (state, action) => {
      const { postId, delta } = action.payload;

      const post = state.posts.find((p) => p.id === postId);
      if (post) post.commentCnt += delta;
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

    builder
      .addCase(modifyPostThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(modifyPostThunk.fulfilled, (state, action) => {
        const updatedPost = action.payload;
        for (let idx = 0; idx < state.posts.length; idx++) {
          if (state.posts[idx].id === updatedPost.id) {
            state.posts[idx] = updatedPost;
          }
        }
      });

    builder
      .addCase(deletePostThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        const postId = action.payload;
        state.posts = state.posts.filter((el) => el.id !== postId);
        state.isLoading = false;
      });
  },
});

export const { updateCommentCnt } = getAllPostsSlice.actions;
