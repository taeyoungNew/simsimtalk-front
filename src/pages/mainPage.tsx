import { Box, Button, Grid2, ListItem } from "@mui/material";
import { PostCard } from "../components/common/PostCard";
import SearchIcon from "@mui/icons-material/Search";
import { SimSimTextField } from "../layout/common/SimsimTextField";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../store/hook";
import { getPostsThunk } from "../store/post/postThunk";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const MainPage = () => {
  const getPosts = useSelector((state: RootState) => state.Post.posts);
  const scrollRef = useRef(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getPosts = async () => {
      await dispatch(getPostsThunk());
    };
    getPosts();
  }, [dispatch]);

  // const infiniteScroll = () => {

  // }

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
          {/* <Grid2> */}
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
              {/* <TextField sx={{ height: "10px" }}></TextField> */}
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
          <Box>
            {/* <Box position="absolute" sx={{ transform: "translate(-100%, 10%)" }}> */}
            {/* <FilterIcon
              color={theme.palette.primary.contrastText}
              fillColor={theme.palette.primary.light}
            /> */}
          </Box>
          {/* </Grid2> */}
        </Box>
        <Box sx={{ overflowY: "scroll" }} height="inherit">
          <Grid2 container rowSpacing={3} direction="column">
            <Grid2 size={12}>
              {getPosts.map((el, index) => (
                <ListItem sx={{ paddingTop: "0" }} key={index}>
                  <PostCard
                    postId={el.postId}
                    userId={el.userId}
                    title={el.title}
                    contents={el.content}
                    userNickname={el.userNickname}
                    likeCnt={el.likeCnt}
                    commentsCnt={el.commentCnt}
                  ></PostCard>
                </ListItem>
              ))}
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </>
  );
};
