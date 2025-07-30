import axios from "axios";

interface CreateComment {
  postId: number;
  comment: string;
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
