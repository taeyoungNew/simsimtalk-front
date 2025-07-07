import { Avatar, Box, Grid2 } from "@mui/material";
import { HeartIcon } from "../../assets/icons/Heart";
import { ChatDuotone } from "../../assets/icons/ChatDuotone";
import { theme } from "../../theme/theme";

interface CardProps {
  postId: number;
  userId: string;
  title: string;
  contents: string;
  userNickname: string;
  likeCnt: number;
  commentsCnt: number;
}

export const PostCard = ({
  postId,
  userId,
  title,
  userNickname,
  contents,
  likeCnt,
  commentsCnt,
}: CardProps) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "10px",
          bgcolor: (theme) => theme.palette.primary.main,
          cursor: "pointer",
        }}
        color={theme.palette.primary.contrastText}
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
            sx={{ padding: "5px" }}
          >
            <Avatar
              sx={{
                width: "50px",
                height: "50px",
                bgcolor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.primary.dark,
              }}
            ></Avatar>
            {userNickname}
          </Grid2>
          <Grid2
            sx={{
              bgcolor: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              padding="5px"
              bgcolor={theme.palette.primary.light}
              width="100%"
              height="50px"
            >
              {contents}...
            </Box>
          </Grid2>
          <Grid2 sx={{ padding: "5px", bgcolor: "none" }}>
            <Box>
              <Grid2 container spacing={1} sx={{ display: "flex" }}>
                <label htmlFor="">
                  <HeartIcon
                    color={theme.palette.primary.dark}
                    fillColor={theme.palette.primary.light}
                    size={30}
                  ></HeartIcon>
                </label>
                {likeCnt}

                <label htmlFor="">
                  <ChatDuotone
                    color={theme.palette.primary.dark}
                    fillColor={theme.palette.primary.light}
                    size={30}
                  ></ChatDuotone>
                </label>
                {commentsCnt}
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
