import Home from './pages/Home/Home.jsx'
import Info from './pages/Info/Info.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import router from "./routes/AppRoutes.jsx";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
