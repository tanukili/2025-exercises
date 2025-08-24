import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@/assets/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "@/App.jsx";

const basename = import.meta.env.BASE_URL; // 去掉尾端斜線以保險

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
