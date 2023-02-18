import "./App.css";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Layout from "./Components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PersistLogin from "./Axios/PersistLogin";
import About from "./Pages/About";

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
