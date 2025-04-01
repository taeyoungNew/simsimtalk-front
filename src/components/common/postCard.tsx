import { Avatar, Box, Grid2 } from "@mui/material";
import { HeartIcon } from "../../assets/icons/heart";
import { ChatDuotone } from "../../assets/icons/chatDuotone";

interface CardProps {
  title: string;
  nickname: string;
  contents: string;
}

export const PostCard = ({ title, nickname, contents }: CardProps) => {
  return (
    <>
      <Box sx={{ width: "100%", padding: "10px", bgcolor: "#D9D9D9" }}>
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
            <Avatar sx={{ width: "50px", height: "50px" }}></Avatar>
            {nickname}
          </Grid2>
          <Grid2
            sx={{
              padding: "5px",
              bgcolor: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {contents}...
            <Box width="95%" height="50px"></Box>
          </Grid2>
          <Grid2 sx={{ padding: "5px", bgcolor: "none" }}>
            <Box>
              <Grid2 container spacing={1} sx={{ display: "flex" }}>
                <HeartIcon size={30}></HeartIcon>
                <ChatDuotone size={30}></ChatDuotone>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
