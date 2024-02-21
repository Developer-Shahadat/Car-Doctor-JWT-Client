import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";
import OrderDetails from "../Pages/Order/OrderDetails";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/orderdetails",
        element: (
          <PrivateRoute>
            <OrderDetails></OrderDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
