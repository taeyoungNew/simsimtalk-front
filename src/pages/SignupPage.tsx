import {
  Box,
  Button,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ChatQuote } from "../assets/icons/ChatQuote";
import { theme } from "../theme/theme";
import { SimSimTextField } from "../components/atoms/inputs/SimsimTextField";
import { useForm, Controller } from "react-hook-form";
import React from "react";
import { signupAPI } from "../apis/signup";
import { useNavigate } from "react-router-dom";

type SignupType = {
  email: string;
  password: string;
  username: string;
  nickname: string;
  aboutMe: string;
  age: number;
};

export const SignupPage = () => {
  const navigator = useNavigate();
  const [age, setAge] = React.useState("");
  const ages = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const { handleSubmit, control } = useForm<SignupType>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
      nickname: "",
      aboutMe: "",
      age: 0,
    },
  });

  const signup = async (data: SignupType) => {
    try {
      const result = await signupAPI(data);
      if (result) if (result.status == 200) navigator("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box
        component={"form"}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0.5em",
        }}
        onSubmit={handleSubmit(signup)}
      >
        <Grid2
          sx={{ paddingTop: { xs: "10px", sm: "20px" } }}
          direction="column"
          container
          rowSpacing={{ xs: 1, sm: 2 }}
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
            <Box id="emailErr">에러</Box>
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => {
                return (
                  <SimSimTextField
                    {...field}
                    sx={{ width: "inherit" }}
                    id="outlined-password-input"
                    label="password"
                    variant="outlined"
                    type="password"
                    size="small"
                  />
                );
              }}
            />
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <Controller
              name="nickname"
              control={control}
              render={({ field }) => {
                return (
                  <SimSimTextField
                    {...field}
                    sx={{ width: "inherit" }}
                    id="outlined-nickname-basic"
                    label="nickname"
                    variant="outlined"
                    size="small"
                  />
                );
              }}
            />
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => {
                return (
                  <SimSimTextField
                    {...field}
                    sx={{ width: "inherit" }}
                    id="outlined-username-basic"
                    label="username"
                    variant="outlined"
                    size="small"
                  />
                );
              }}
            />
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <Controller
              name="aboutMe"
              control={control}
              render={({ field }) => {
                return (
                  <SimSimTextField
                    {...field}
                    sx={{ width: "inherit" }}
                    id="outlined-multiline-static"
                    label="aboutMe"
                    multiline
                    rows={4}
                  />
                );
              }}
            />
          </Grid2>
          <Grid2 sx={{ width: "100%" }} flexGrow={1}>
            <Controller
              name="age"
              control={control}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>

                    <Select
                      {...field}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                    </Select>
                  </FormControl>
                );
              }}
            />
          </Grid2>
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
              type="submit"
            >
              会員登録
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
