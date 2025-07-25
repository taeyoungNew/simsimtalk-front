import { Box } from "@mui/material";
import { PostDetailHeader } from "./PostDetailHeader";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllPostsSlice } from "../../store/post/allPostsSlice";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { getPostDetailThunk } from "../../store/post/PostDetailThunk";
import { useAppDispatch } from "../../store/hook";

// 게시물
// 타이틀, 내용, 유저닉네임, 댓글, 좋아요수
export const PostDetail = () => {
  const dispatch = useAppDispatch();
  // 어떻게 게시물의 내용을 가져올까
  const { postId } = useParams();

  const getPostDetail = async (postId: number) => {
    await dispatch(getPostDetailThunk(postId));
  };

  useEffect(() => {
    getPostDetail(Number(postId));
  }, []);

  // redux를 사용할까 아니면 props로 보내줄까

  return (
    <>
      <Box sx={{ padding: "5%" }}>
        <PostDetailHeader></PostDetailHeader>
        <Box>바디</Box>
        <Box>풋터</Box>
      </Box>
    </>
  );
};
