import { Box, Grid2, ListItem } from "@mui/material";
import { PostCard } from "../components/common/postCard";
import { FilterIcon } from "../assets/icons/filterIcon";

const dummies = [
  {
    title: "title",
    nickname: "nick",
    contents: "hihi",
  },
  {
    title: "title2",
    nickname: "nick2",
    contents: "hihi",
  },
  {
    title: "title3",
    nickname: "nick3",
    contents: "hihi",
  },
];

export const MainPage = () => {
  return (
    <>
      <Box
        sx={{
          marginRight: "auto",
          marginLeft: "auto",
          width: "80%",
          height: "100vh",
          overflow: "hidden",
          marginTop: "10em",
        }}
      >
        <Box position="relative">
          <Box
            height={"50px"}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <FilterIcon />
          </Box>
        </Box>
        <Box sx={{ overflowY: "scroll" }} height="inherit">
          <Grid2 container rowSpacing={3} direction="column">
            <Grid2 size={12}>
              {dummies.map((el, index) => (
                <ListItem sx={{ paddingTop: "0" }} key={index}>
                  <PostCard
                    title={el.title}
                    nickname={el.nickname}
                    contents={el.contents}
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
