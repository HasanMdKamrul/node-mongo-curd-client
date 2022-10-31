import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Update from "./components/Update";
import UsersAdd from "./components/UsersAdd";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: () => fetch(`http://localhost:15000/users`),
    },
    {
      path: "/users/add",
      element: <UsersAdd />,
    },
    {
      path: "/update/:id",
      element: <Update />,
      loader: ({ params: { id } }) =>
        fetch(`http://localhost:15000/update/${id}`),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
