import { Box, Button, Grid2, TextField } from "@mui/material";
import { ChatQuote } from "../assets/icons/chatQuote";
import { theme } from "../theme/theme";
import { SimSimTextField } from "../layout/common/simsimTextField";

// const formData = [{

// }]

export const SignupPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0.5em",
        }}
      >
        <Grid2
          sx={{ paddingTop: { xs: "10px", sm: "20px" } }}
          direction="column"
          container
          rowSpacing={{ xs: 1, sm: 2 }}
          // rowSpacing={3}
        >
          <Grid2
            width={350}
            size={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ChatQuote
              color={theme.palette.primary.contrastText}
              size={100}
            ></ChatQuote>
          </Grid2>
          <Grid2 sx={{ width: "100%", paddingTop: "0.5em" }} flexGrow={1}>
            <SimSimTextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              sx={{
                width: "inherit",
                color: "#E1EACD",
              }}
              size="small"
              placeholder="email"
            ></SimSimTextField>
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <SimSimTextField
              sx={{ width: "inherit" }}
              id="outlined-password-input"
              label="password"
              variant="outlined"
              type="password"
              size="small"
            />
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <SimSimTextField
              sx={{ width: "inherit" }}
              id="outlined-nickname-basic"
              label="nickname"
              variant="outlined"
              size="small"
            />
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <SimSimTextField
              sx={{ width: "inherit" }}
              id="outlined-username-basic"
              label="username"
              variant="outlined"
              size="small"
            />
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <SimSimTextField
              sx={{ width: "inherit" }}
              id="outlined-multiline-static"
              label="aboutme"
              multiline
              rows={4}
            />
          </Grid2>
          {}
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <Button
              variant="contained"
              // color={theme.palette.primary.contrastText}
              sx={{
                backgroundColor: (theme) => theme.palette.primary.dark,
                color: (theme) => theme.palette.primary.contrastText,
                width: "inherit",
                height: "40px",
                fontSize: "10px",
              }}
            >
              会員登録
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
