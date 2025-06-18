
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React, { StrictMode } from "react";
import router from "./routes/AppRoutes.jsx";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
);
