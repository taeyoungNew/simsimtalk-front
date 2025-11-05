import axios from "axios";

interface CreateComment {
  postId: number;
  comment: string;
}

interface ModifyComment {
  id: number;
  postId: number;
  content: string;
}

interface DeleteComment {
  id: number;
  postId: number;
}

export const createCommentAPI = async (payload: CreateComment) => {
  return await axios
    .post(
      `${import.meta.env.VITE_API_BASE}comment/${payload.postId}`,
      {
        comment: payload.comment,
      },
      {
        withCredentials: true,
      },
    )
    .then(function (response) {
      return response.data.plainComment;
    })
    .catch(function (error) {
      throw error;
    });
};

export const deleteCommentAPI = async (payload: DeleteComment) => {
  return await axios
    .delete(
      `${import.meta.env.VITE_API_BASE}comment/${payload.id}?postId=${payload.postId}`,
      {
        withCredentials: true,
      },
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
};

export const modifyCommentAPI = async (payload: ModifyComment) => {
  return await axios
    .put(
      `${import.meta.env.VITE_API_BASE}comment/${payload.id}`,
      { comment: payload.content, postId: payload.postId },
      {
        withCredentials: true,
      },
    )
    .then(function (response) {
      return response.data.data.comment;
    })
    .catch(function (error) {
      throw error;
    });
};
