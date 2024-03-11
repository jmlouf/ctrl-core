import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import forums from "./pages/Forums";

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
        path: "/login",
        element: <Login />
      },
      {
        path: "/forums",
        element: <Forums />
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
