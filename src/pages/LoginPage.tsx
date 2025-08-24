import { Box, Button, Grid2 } from "@mui/material";
import { ChatQuote } from "../assets/icons/ChatQuote";
import "../assets/css/loginPage.css";
import { theme } from "../theme/theme";
import { SimSimTextField } from "../components/atoms/inputs/SimsimTextField";
import { useForm, Controller } from "react-hook-form";
import { useAppDispatch } from "../store/hook";
import { useNavigate } from "react-router-dom";
import { authMeThunk, loginThunk } from "../store/auth/authThunk";

type LoginType = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const { handleSubmit, control } = useForm<LoginType>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const login = async (data: LoginType) => {
    const props: LoginType = {
      email: data.email,
      password: data.password,
    };

    await dispatch(
      loginThunk({ email: props.email, password: props.password }),
    );
    await navigator("/");
  };

  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit(login)}
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
            <ChatQuote
              color={theme.palette.primary.contrastText}
              size={100}
            ></ChatQuote>
          </Grid2>
          <Grid2 sx={{ width: "100%", paddingTop: "1em" }} flexGrow={1}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <SimSimTextField
                    {...field}
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
                );
              }}
            />
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => {
                return (
                  <SimSimTextField
                    {...field}
                    id="outlined-password-input"
                    label="password"
                    variant="outlined"
                    placeholder="password"
                    type="password"
                    sx={{ width: "inherit", height: "inherit" }}
                    size="small"
                  ></SimSimTextField>
                );
              }}
            />
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <Button
              variant="contained"
              sx={{
                color: (theme) => theme.palette.primary.contrastText,
                backgroundColor: (theme) => theme.palette.primary.dark,

                width: "inherit",
                height: "40px",
                fontSize: "10px",
              }}
              type="submit"
            >
              ログイン
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
