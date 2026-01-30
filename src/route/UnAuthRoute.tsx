import { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import type { RootState } from "../store";

export default function UnAuthRoute({ children }: { children: JSX.Element }) {
  const isLogin = useSelector((state: RootState) => state.User.isLogin);

  if (isLogin) {
    return <Navigate to="/" replace />;
  }
  return children;
}
