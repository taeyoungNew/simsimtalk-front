import { Box, Button, Modal, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Avatar } from "../../components/common/avatar";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import { theme } from "../../theme/theme";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../store/hook";
import { deletePostThunk } from "../../store/post/PostDetailThunk";

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
  postId: Number;
  userNickname: String;
  userId: String;
}
export const PostDetailHeader = ({
  postId,
  userNickname,
  userId,
}: PostDetailHeaderProps) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const myUserid = useSelector((state: RootState) => state.User.id);
  const isMyPost = myUserid === userId;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletePost = async () => {
    await dispatch(deletePostThunk(postId));
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
              <Button>수정</Button>
              <Button onClick={handleOpen}>삭제</Button>
            </Box>
          ) : (
            <Box></Box>
          )}
          {/* 새게시물입력창 */}
          <Modal
            open={open}
            onClose={handleClose}
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
                {/* <Button onClick={deletePost}>remove</Button> */}
                <Button onClick={handleClose}>Cancle</Button>
              </Box>
            </Box>
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
