// import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { theme } from "./theme/theme";
import { MainPage } from "./pages/mainPage";
import { LoginPage } from "./pages/loginPage";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/signupPage";
import { NoPage } from "./pages/noPage";
import { UserPage } from "./pages/myPage";
import { Applayout } from "./layout/applayout";
import { useEffect } from "react";
import { authMe } from "./apis/auth";
import { useAppDispatch } from "./store/hook";
import { setUser } from "./store/slices/userSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const checkAuth = async () => {
      const isLogin = await authMe();
      dispatch(setUser({ isLogin: isLogin, nickname: "nick" }));
    };
    checkAuth();
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Applayout />}>
              <Route index element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/myPage/:id" element={<UserPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
