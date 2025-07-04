import { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store";

export default function UnAuthRoute({ children }: { children: JSX.Element }) {
  const isLogin = useSelector((state: RootState) => state.User.isLogin);
  return !isLogin ? children : <Navigate to="/" />;
}
