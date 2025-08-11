import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Avatar } from "../../components/common/Avatar";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import { theme } from "../../theme/theme";
import { useAppDispatch } from "../../store/hook";
import {
  deletePostThunk,
  modifyPostThunk,
} from "../../store/post/postDetailThunk";
import { Controller, useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
interface PostDetailHeaderProps {
  postId: number;
  userNickname: String;
  userId: String;
}

interface ModifyPost {
  id: number;
  title: string;
  content: string;
}

export const PostDetailHeader = ({
  postId,
  userNickname,
  userId,
}: PostDetailHeaderProps) => {
  const dispatch = useAppDispatch();
  const [openDeletePostModal, setOpenDeletePostModal] = useState(false);
  const [openModifyPostModal, setOpenModifyPostModal] = useState(false);
  const { control, handleSubmit } = useForm<ModifyPost>({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const myUserid = useSelector((state: RootState) => state.User.id);
  const isMyPost = myUserid === userId;
  const deletePostHandleOpen = () => {
    setOpenDeletePostModal(true);
  };

  const deletePostHandleClose = () => {
    setOpenDeletePostModal(false);
  };

  const modifyPostHandleOpen = () => {
    setOpenModifyPostModal(true);
  };
  const modifyPostHandleClose = () => {
    setOpenModifyPostModal(false);
  };

  const modifyPost = async (data: ModifyPost) => {
    const payload: ModifyPost = {
      id: postId,
      title: data.title,
      content: data.content,
    };
    await dispatch(modifyPostThunk(payload));
    modifyPostHandleClose();
  };

  const deletePost = async () => {
    await dispatch(deletePostThunk(postId));
    deletePostHandleClose();
    window.location.href = "/";
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <NavLink to={"/"}>
            <Button>Back</Button>
          </NavLink>
          {isMyPost === true ? (
            <Box>
              <Button onClick={modifyPostHandleOpen}>수정</Button>
              <Button onClick={deletePostHandleOpen}>삭제</Button>
            </Box>
          ) : (
            <Box></Box>
          )}
          {/* 게시물삭제알림창 */}
          <Modal
            open={openDeletePostModal}
            onClose={deletePostHandleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{ ...style }}>
              <Typography color={theme.palette.primary.dark}>
                해당 게시물을 삭제하시겠습니까?
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button onClick={deletePost}>remove</Button>
                <Button onClick={deletePostHandleClose}>Cancle</Button>
              </Box>
            </Box>
          </Modal>
          {/* 게시물수정입력창 */}
          <Modal
            open={openModifyPostModal}
            onClose={modifyPostHandleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <form onSubmit={handleSubmit(modifyPost)}>
              <Box sx={{ ...style }}>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="standard-basic"
                      label="title"
                      variant="standard"
                      // defaultValue="title"
                      {...field}
                    />
                  )}
                />

                <Box sx={{ width: "100%" }}>
                  <Controller
                    name="content"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        id="standard-multiline-static"
                        label="contents"
                        multiline
                        rows={4}
                        variant="standard"
                        sx={{ width: "inherit" }}
                        // defaultValue="contents"
                        {...field}
                      />
                    )}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button type="submit">Modify Post</Button>
                  <Button onClick={modifyPostHandleClose}>Close</Button>
                </Box>
              </Box>
            </form>
          </Modal>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
        >
          <Button>
            <Typography>{userNickname}</Typography>
          </Button>
          <Button>
            <Avatar></Avatar>
          </Button>
        </Box>
      </Box>
    </>
  );
};
