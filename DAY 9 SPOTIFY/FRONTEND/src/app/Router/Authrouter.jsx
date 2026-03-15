import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Dashbord from "../../pages/Dashbord";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path:'/metaMusic',
    element: <Dashbord/>
  }
]);

export default router;
