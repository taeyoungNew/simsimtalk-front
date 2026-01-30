import type { RootState } from "..";

export const isLikePost = (postId: number) => (state: RootState) =>
  state.GetAllPosts.posts[postId].isLiked;
