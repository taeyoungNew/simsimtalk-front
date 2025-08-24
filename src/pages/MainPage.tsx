import { Box, Button, Grid2, ListItem, Modal, TextField } from "@mui/material";
import { PostCard } from "../components/oraganisms/PostCard";
import CreateIcon from "@mui/icons-material/Create";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../store/hook";
import { createPostThunk, getPostsThunk } from "../store/post/allPostsThunk";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useForm, Controller } from "react-hook-form";
import { WritePost } from "../components/WritePost";

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

interface WritePost {
  title: string;
  content: string;
}

export const MainPage = () => {
  const [open, setOpen] = useState(false);
  const isLogin = useSelector((state: RootState) => state.User.isLogin);
  const getPostDatas = useSelector(
    (state: RootState) => state.GetAllPosts.posts,
  );
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm<WritePost>({
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const isLoading = useSelector(
    (state: RootState) => state.GetAllPosts.isLoading,
  );
  let postLastId = getPostDatas[getPostDatas.length - 1]?.id;

  const lastPostRef = useRef(null);

  const getPosts = async (postLastId: number) => {
    await dispatch(getPostsThunk(postLastId));
  };
  const observer = useRef<IntersectionObserver | null>(null);
  let isFetching = false;
  useEffect(() => {
    getPosts(postLastId);
  }, []);

  useEffect(() => {
    if (!lastPostRef.current) return;

    // 기존 옵저버 해제
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetching) {
          isFetching = true;
          if (postLastId !== 0 && !isLoading) {
            setTimeout(() => {
              isFetching = true;
              getPosts(postLastId);
            }, 500);
          }
          observer.current?.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );
    observer.current.observe(lastPostRef.current);
    return () => {
      // 클린업: 컴포넌트 언마운트 시에도 해제
      observer.current?.disconnect();
    };
  }, [getPostDatas]);

  const writePost = async (data: WritePost) => {
    await dispatch(createPostThunk(data));
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "inherit",
          overflow: "scoll",
        }}
      >
        <Box
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            {isLogin === true ? (
              <Button sx={{ minWidth: "40px" }} onClick={handleOpen}>
                <CreateIcon
                  sx={{
                    color: (theme) => theme.palette.fontColor.main,
                    fontSize: 30,
                  }}
                ></CreateIcon>
              </Button>
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
              <form onSubmit={handleSubmit(writePost)}>
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
                    <Button type="submit">Write Post</Button>
                    <Button onClick={handleClose}>Close</Button>
                  </Box>
                </Box>
              </form>
            </Modal>
          </Box>
        </Box>
        {isLogin === true ? <WritePost></WritePost> : <Box></Box>}

        <Box height="inherit">
          <Grid2 container rowSpacing={3} direction="column">
            <Grid2 size={12}>
              {getPostDatas.map((el, index) => {
                const isLast = index === getPostDatas.length - 1;

                if (isLast) {
                  postLastId = getPostDatas[index].id;
                }
                return (
                  <ListItem
                    sx={{
                      paddingTop: "0",
                      paddingLeft: "0",
                      paddingRight: "0",
                    }}
                    key={index}
                    ref={isLast ? lastPostRef : null}
                  >
                    <PostCard
                      id={el.id}
                      userId={el.userId}
                      title={el.title}
                      contents={el.content}
                      userNickname={el.userNickname}
                      likeCnt={el.likeCnt}
                      commentsCnt={el.commentCnt}
                    ></PostCard>
                  </ListItem>
                );
              })}
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </>
  );
};
