import axios from "axios";
interface CreatePost {
  content: string;
}

interface GetPostDetail {
  postId: number;
  postUserId: string;
}

interface ModifyPost {
  id: number;
  content: string;
}

interface GetUserPostsReq {
  userId: string;
  postLastId: null | number;
}

export const getPostAPI = async (params: GetPostDetail) => {
  return await axios.get(`${import.meta.env.VITE_API_BASE}post/detail`, {
    params: {
      postId: params.postId,
      postUserId: params.postUserId,
    },
    withCredentials: true,
  });
};

export const getPostsAPI = async (lastPostId: number) => {
  return await axios.get(
    `${import.meta.env.VITE_API_BASE}post?postLastId=${lastPostId}`,
    {
      withCredentials: true,
    },
  );
};

export const createPostAPI = async (content: string) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE}post/`,
    {
      content,
    },
    {
      withCredentials: true,
    },
  );
};

export const modifyPostAPI = async (payload: ModifyPost) => {
  return await axios.put(
    `${import.meta.env.VITE_API_BASE}post/${payload.id}`,
    {
      content: payload.content,
    },
    {
      withCredentials: true,
    },
  );
};

export const deletePostAPI = async (postId: Number) => {
  return await axios.delete(`${import.meta.env.VITE_API_BASE}post/${postId}`, {
    withCredentials: true,
  });
};

export const getUserPostsAPI = async (param: GetUserPostsReq) => {
  return await axios.get(`${import.meta.env.VITE_API_BASE}post/user-posts`, {
    params: {
      userId: param.userId,
      postLastId: String(param.postLastId),
    },
    withCredentials: true,
  });
};
