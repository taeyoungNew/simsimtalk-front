import axios from "axios";
import store from "../store/index";

import { logoutThunk } from "../store/auth/authThunk";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE}`,
  withCredentials: true,
});

const logout = async () => {
  const state = store.getState();
  const userId = state.User.id;
  await store.dispatch(logoutThunk({ userId }));
  // const userId = useSelector((state: RootState) => state.User.id);
  // const keepUserId = userId;
  // const dispatch = useAppDispatch();
  // await dispatch(logoutThunk({ userId: keepUserId }));
};

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err.response?.status;

    if (status === 401) {
      logout();
    }

    return Promise.reject(err);
  },
);

export default instance;
