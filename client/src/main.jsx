import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
//import Forums from "./pages/Forums";
import Profile from "./pages/Profile";
import Images from "./pages/Images";
//import Posts from "./pages/posts";
//import Details from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/images",
        element: <Images />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        // '/me'
        path: "/:username",
        element: <Profile />
      },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
