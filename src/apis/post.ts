import axios from "axios";
interface CreatePost {
  title: string;
  content: string;
}

interface ModifyPost {
  id: number;
  title: string;
  content: string;
}

export const getPostAPI = async (postId: Number) => {
  return await axios
    .get(`${import.meta.env.VITE_API_BASE}post/${postId}`, {
      withCredentials: true,
    })
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      throw error;
    });
};

export const getPostsAPI = async (lastPostId: number) => {
  return await axios
    .get(`${import.meta.env.VITE_API_BASE}post?postLastId=${lastPostId}`, {
      withCredentials: true,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
};

export const createPostAPI = async (data: CreatePost) => {
  return await axios
    .post(
      `${import.meta.env.VITE_API_BASE}post/`,
      {
        title: data.title,
        content: data.content,
      },
      {
        withCredentials: true,
      },
    )
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      throw error;
    });
};

export const modifyPostAPI = async (payload: ModifyPost) => {
  return await axios
    .put(
      `${import.meta.env.VITE_API_BASE}post/${payload.id}`,
      {
        title: payload.title,
        content: payload.content,
      },
      {
        withCredentials: true,
      },
    )
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      throw error;
    });
};

export const deletePostAPI = async (postId: Number) => {
  return await axios
    .delete(`${import.meta.env.VITE_API_BASE}post/${postId}`, {
      withCredentials: true,
    })
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      throw error;
    });
};
