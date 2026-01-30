import { JSX, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { Navigate } from "react-router-dom";

export default function AuthRoute({ children }: { children: JSX.Element }) {
  const { isLogin } = useSelector((state: RootState) => state.User);

  if (!isLogin) {
    return <Navigate to="/login" replace></Navigate>;
  }

  return children;
}
