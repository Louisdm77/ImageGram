import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Photos from "./pages/photos";
import Error from "./pages/error";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import ProtectedRoutes from "./components/protectedRoutes";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/photos",
        element: <Photos />,
        errorElement: <Error />,
      },
      {
        path: "/profile",
        element: <Profile />,
        errorElement: <Error />,
      },
      {
        path: "/chat",
        element: <Chat />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <LogIn />,
    errorElement: <Error />,
  },
]);
