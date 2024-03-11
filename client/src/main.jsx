import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
<<<<<<< HEAD
import forums from "./pages/Forums";
=======
import Profile from "./pages/Profile";
import Images from "./pages/Images";

>>>>>>> d4f92dabd91bcbdb096d6fd6cb5cbb70b64f0e48

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
        path: "/forums",
        element: <Forums />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/profiles/:username",
        element: <Profile />
      },
      {
        path: "/:username",
        element: <Profile />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
