import { Box, Button, Grid2, ListItem } from "@mui/material";
import { PostCard } from "../components/common/PostCard";
import SearchIcon from "@mui/icons-material/Search";
import { SimSimTextField } from "../layout/common/SimsimTextField";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../store/hook";
import { getPostsThunk } from "../store/post/postThunk";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const MainPage = () => {
  const getPostDatas = useSelector((state: RootState) => state.Post.posts);
  const dispatch = useAppDispatch();
  let postLastId = 0;

  const lastPostRef = useRef(null);

  const getPosts = async (postLastId: number) => {
    await dispatch(getPostsThunk(postLastId));
  };

  useEffect(() => {
    getPosts(postLastId);
  }, []);

  useEffect(() => {
    if (!lastPostRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("getPostDatas = ", getPostDatas.length - 1);

        if (entry.isIntersecting) {
          if (postLastId !== 0) {
            getPosts(postLastId);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    observer.observe(lastPostRef.current);

    return () => {
      if (lastPostRef.current) observer.unobserve(lastPostRef.current);
    };
  }, [getPostDatas]);

  return (
    <>
      <Box
        sx={{
          marginRight: "auto",
          marginLeft: "auto",
          width: "80%",
          height: "100vh",
          overflow: "hidden",
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
          <Box>
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
              <Button>
                <SearchIcon
                  sx={{
                    color: (theme) => theme.palette.primary.dark,
                    fontSize: 30,
                  }}
                ></SearchIcon>
              </Button>
            </form>
          </Box>
          <Box></Box>
        </Box>
        <Box sx={{ overflowY: "scroll" }} height="inherit">
          <Grid2 container rowSpacing={3} direction="column">
            <Grid2 size={12}>
              {getPostDatas.map((el, index) => {
                const isLast = index === getPostDatas.length - 1;
                if (isLast) {
                  // console.log("isLast = ", isLast);

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
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </>
  );
};
