import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import UsersAdd from "./components/UsersAdd";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/users/add",
      element: <UsersAdd />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
