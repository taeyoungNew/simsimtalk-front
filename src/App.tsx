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
import { UserPage } from "./pages/MyPage";
import { Applayout } from "./layout/Applayout";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./store/hook";
import UnAuthRoute from "./route/UnAuthRoute";
import { authMeThunk } from "./store/auth/authThunk";
import { DeTailPost } from "./pages/DetailPost";

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
              <Route path="/myPage/:id" element={<UserPage />} />
              <Route
                path="/detailPost/:postId"
                element={<DeTailPost></DeTailPost>}
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
