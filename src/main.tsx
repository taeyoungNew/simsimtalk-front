import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  // </StrictMode>,
);
