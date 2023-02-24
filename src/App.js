import "./App.css";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Layout from "./Components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PersistLogin from "./Axios/PersistLogin";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import CreateStore from "./Pages/CreateStore";
import Shimmer from "./Pages/Shimmer";
import Store from "./Pages/Store";
import Settings from "./Pages/Settings";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <PersistLogin />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/create-store",
            element: <CreateStore />,
          },
          {
            path: "/store",
            element: <Store />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
