import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Homepage from "./ui/Homepage";
import Layout from "./ui/Layout";
import AppLayout from "./features/app/AppLayout";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import Contact from "./ui/Contact";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/app",
      element: <AppLayout />,
      children: [],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
