import { createBrowserRouter } from "react-router";
import Logins from "../../pages/Logins";
import Registers from "../../pages/Registers";
import App from "../App";

let router = createBrowserRouter([
  {
    path: "/login",
    element: <Logins />,
  },
  {
    path: "/register",
    element: <Registers />,
  },
]);

export default router;
