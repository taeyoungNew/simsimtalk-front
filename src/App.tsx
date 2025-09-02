// import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { theme } from "./theme/theme";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/SignupPage";
import { NoPage } from "./pages/NoPage";
import { UserPageDetail } from "./pages/userPageDetail/UserPageDetail";
import { Applayout } from "./layout/Applayout";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./store/hook";
import UnAuthRoute from "./route/UnAuthRoute";
import { authMeThunk } from "./store/auth/authThunk";
import { PostDetail } from "./pages/postDetail/PostDetail";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const checkAuth = async () => {
      await dispatch(authMeThunk());
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
              <Route
                path="/login"
                element={
                  <UnAuthRoute>
                    <LoginPage />
                  </UnAuthRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <UnAuthRoute>
                    <SignupPage />
                  </UnAuthRoute>
                }
              />
              <Route path="/userPage/:id" element={<UserPageDetail />} />
              <Route
                path="/postDetail/:postId"
                element={<PostDetail></PostDetail>}
              />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
