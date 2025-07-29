import { Box, Button, Grid2, ListItem, Modal, TextField } from "@mui/material";
import { PostCard } from "../components/common/postCard";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import { SimSimTextField } from "../layout/common/simsimTextField";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../store/hook";
import { createPostThunk, getPostsThunk } from "../store/post/allPostsThunk";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useForm, Controller } from "react-hook-form";

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
          marginRight: "auto",
          marginLeft: "auto",
          width: "80%",
          height: "inherit",
          overflow: "scoll",
          marginTop: "3em",
        }}
      >
        <Box
          position="relative"
          width="100%"
          height="40px"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "2em",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <form action="" method="post">
              <SimSimTextField
                id="outlined-basic"
                label="search"
                variant="outlined"
                sx={{
                  width: "inherit",
                  color: "#E1EACD",
                }}
                size="small"
                placeholder="search"
              ></SimSimTextField>
              <Button sx={{ minWidth: "40px" }}>
                <SearchIcon
                  sx={{
                    color: (theme) => theme.palette.primary.dark,
                    fontSize: 30,
                  }}
                ></SearchIcon>
              </Button>
            </form>
            <Button sx={{ minWidth: "40px" }} onClick={handleOpen}>
              <CreateIcon
                sx={{
                  color: (theme) => theme.palette.primary.dark,
                  fontSize: 30,
                }}
              ></CreateIcon>
            </Button>

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
                    <Button type="submit">Write Post</Button>
                    <Button onClick={handleClose}>Close</Button>
                  </Box>
                </Box>
              </form>
            </Modal>
          </Box>
        </Box>

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
                    sx={{ paddingTop: "0" }}
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
              {/* <Box sx={{ display: "flex"  }}>
                <CircularProgress />
              </Box> */}
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </>
  );
};
