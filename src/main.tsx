import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import { store } from "./store";
import MuiProvider from "./lib/mui/MuiProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiProvider>
    </Provider>
  </React.StrictMode>
);
