import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import About from "./components/About/About.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import User from "./components/User/User.jsx";
import GitHub from "./GitHub/GitHub.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="user" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route path="github" element={<GitHub />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
