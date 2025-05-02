import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispath } from "./index";

export const useAppDispatch = useDispatch.withTypes<AppDispath>();
export const useAppSelector = useSelector.withTypes<RootState>();
