import { Avatar, Box, Grid2, Typography } from "@mui/material";
import { HeartIcon } from "../../assets/icons/Heart";
import { ChatDuotone } from "../../assets/icons/ChatDuotone";
import { theme } from "../../theme/theme";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

interface CardProps {
  id: number;
  userId: string;
  contents: string;
  userNickname: string;
  likeCnt: number;
  isLiked: boolean;
  commentsCnt: number;
}
const DetailPostLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }

  &.active {
    font-weight: bold;
  }
`;

export const PostCard = ({
  id,
  userId,
  userNickname,
  contents,
  likeCnt,
  isLiked,
  commentsCnt,
}: CardProps) => {
  const to = location.pathname;

  return (
    <>
      <Box
        sx={{
          borderRadius: "10px",
          width: "inherit",
          padding: "10px",
          bgcolor: (theme) => theme.palette.background.paper,
          cursor: "pointer",
        }}
        color={theme.palette.fontColor.main}
      >
        <DetailPostLink
          to={`/postDetail/${id}`}
          className={({ isActive }) =>
            isActive
              ? "no-underline text-black font-bold"
              : "no-underline text-gray-500"
          }
          state={{ from: to }}
        >
          <Grid2
            sx={{ display: "flex", justifyContent: "center" }}
            container
            direction="column"
            rowSpacing={2}
          >
            <Grid2
              alignItems={"center"}
              container
              direction="row"
              display={"flex"}
              spacing={1}
            >
              <Avatar
                sx={{
                  width: "50px",
                  height: "50px",
                  bgcolor: (theme) => theme.palette.fontColor.placeholder,
                  color: (theme) => theme.palette.background.paper,
                }}
              ></Avatar>
              <Typography
                sx={{
                  color: (theme) => theme.palette.fontColor.main,
                }}
              ></Typography>
            </Grid2>
            <Grid2
              sx={{
                bgcolor: "white",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box width="100%" height="auto" overflow={"hidden"}>
                <Typography
                  sx={{
                    whiteSpace: "pre-wrap",
                    textOverflow: "ellipsis",
                    maxHeight: "100px",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    padding: "0 0.5em",
                    color: (theme) => theme.palette.fontColor.main,
                  }}
                >
                  {contents}
                </Typography>
              </Box>
            </Grid2>
            <Grid2 sx={{ padding: "5px", bgcolor: "none" }}>
              <Box>
                <Grid2 container spacing={1} sx={{ display: "flex" }}>
                  <label htmlFor="">
                    <HeartIcon
                      color={
                        isLiked
                          ? theme.palette.background.paper
                          : theme.palette.fontColor.assist
                      }
                      fillColor={
                        isLiked
                          ? theme.palette.fontColor.isLike
                          : theme.palette.background.paper
                      }
                      size={30}
                    ></HeartIcon>
                  </label>
                  {likeCnt}

                  <label htmlFor="">
                    <ChatDuotone
                      color={theme.palette.fontColor.main}
                      fillColor={theme.palette.background.paper}
                      size={30}
                    ></ChatDuotone>
                  </label>
                  {commentsCnt}
                </Grid2>
              </Box>
            </Grid2>
          </Grid2>
        </DetailPostLink>
      </Box>
    </>
  );
};
