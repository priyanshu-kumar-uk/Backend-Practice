import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Dashbord from "../../pages/Dashbord";
import ProtectedRoute from "../../component/ProtectedRoute";
import Uploadsong from "../../pages/Uploadsong.jsx";

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
  element:<ProtectedRoute>
       <Dashbord/>
    </ProtectedRoute>
 },
 {
  path:"/upload",
  element:<Uploadsong/>
 }
]);

export default router;
