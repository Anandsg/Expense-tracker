import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Welcome from "./components/pages/Welcome";
import Header from "./components/pages/Header";
import UpdateProfile from "./components/pages/UpdateProfile";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/welcome',
      element: <Welcome />
    },
    {
      path: '/updateProfile',
      element: <UpdateProfile />
    }

  ])
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  )
};

export default App;
