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
import { authMe } from "./apis/Auth";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { setUser } from "./store/auth/authSlice";
import UnAuthRoute from "./route/UnAuthRoute";

function App() {
  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      setIsLogin(await authMe());
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
            <Route path="/" element={<Applayout isLogin={isLogin} />}>
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
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
