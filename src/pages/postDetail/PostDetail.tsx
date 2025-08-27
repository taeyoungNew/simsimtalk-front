import { Box } from "@mui/material";
import { PostDetailHeader } from "./PostDetailHeader";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { getPostDetailThunk } from "../../store/post/postDetailThunk";
import { useAppDispatch } from "../../store/hook";
import { PostDetailBody } from "./PostDetailBody";
import { PostDetailFooter } from "./PostDetailFooter";
import { theme } from "../../theme/theme";

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

  const postDetailInfo = useSelector((state: RootState) => state.GetPostDetail);

  return (
    <>
      <Box sx={{ padding: "0 1rem" }}>
        <Box
          sx={{
            background: (theme) => theme.palette.background.paper,
            borderRadius: "10px",
            padding: "1em",
            marginBottom: "1em",
          }}
        >
          <PostDetailHeader
            postId={postDetailInfo.id}
            userNickname={postDetailInfo.userNickname}
            userId={postDetailInfo.userId}
          ></PostDetailHeader>
          <PostDetailBody
            content={postDetailInfo.content}
            likeCnt={postDetailInfo.likeCnt}
            commentCnt={postDetailInfo.commentCnt}
            isEditing={false}
          ></PostDetailBody>
        </Box>
        <Box
          sx={{
            background: (theme) => theme.palette.background.paper,
            borderRadius: "10px",
            padding: "1em",
          }}
        >
          <PostDetailFooter
            postId={Number(postId)}
            Comments={postDetailInfo.Comments}
          ></PostDetailFooter>
        </Box>
      </Box>
    </>
  );
};
