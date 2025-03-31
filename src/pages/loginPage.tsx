import { Box, Button, Grid2, TextField } from "@mui/material";
import { ChatQuote } from "../assets/icons/chatQuote";
import "../assets/css/loginPage.css";

export const LoginPage = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "0.5em" }}
      >
        <Grid2
          sx={{ paddingTop: "30px" }}
          direction="column"
          container
          rowSpacing={5}
        >
          <Grid2
            width={350}
            size={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ChatQuote size={100}></ChatQuote>
          </Grid2>
          <Grid2 sx={{ width: "100%", paddingTop: "1em" }} flexGrow={1}>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              sx={{ width: "inherit" }}
              size="small"
            />
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <TextField
              id="outlined-password-input"
              label="password"
              variant="outlined"
              type="password"
              sx={{ width: "inherit", height: "inherit" }}
              size="small"
              // type="password"
            />
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: (theme) => theme.palette.buttonColor.main,
                width: "inherit",
                height: "40px",
                fontSize: "10px",
              }}
            >
              ログイン
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
