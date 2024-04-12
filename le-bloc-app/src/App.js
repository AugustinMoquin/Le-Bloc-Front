import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./screen/login";
import Register from "./screen/register";
import Home from "./screen/home";
import Map from "./screen/map";
import BlocCreation from "./screen/blocCreate";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/blocCreation",
    element: <BlocCreation />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
