import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.tsx";
import CryptoList from "./CryptoList.tsx";
import CryptoDetails from "./CryptoDetails.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<CryptoList />} />
      <Route path="/crypto/:symbol" element={<CryptoDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
);
