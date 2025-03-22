import { Box, Grid2, ListItem, SvgIcon, TextField } from "@mui/material";
import { ChatQuote } from "../assets/icons/chatQuote";

export const LoginPage = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid2
          sx={{ paddingTop: "30px" }}
          direction="column"
          container
          rowSpacing={4}
        >
          <Grid2 size={12} sx={{ display: "flex", justifyContent: "center" }}>
            <ChatQuote></ChatQuote>
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <TextField id="outlined-basic" label="email" variant="outlined" />
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
            />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
