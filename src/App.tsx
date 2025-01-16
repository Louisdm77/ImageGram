import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import "./App.css";
import { UserContextProvider } from "./assets/context/userAuthContext";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
};

export default App;
