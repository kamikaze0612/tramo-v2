import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Homepage from "./ui/Homepage";
import Layout from "./ui/Layout";
import AppLayout, { loader as appLoader } from "./features/app/AppLayout";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import Contact from "./ui/Contact";
import LocationsList from "./features/locations/LocationsList";

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
      loader: appLoader,
      children: [
        {
          index: true,
          element: <Navigate to="locations" replace />,
        },
        {
          path: "locations",
          element: <LocationsList />,
        },
      ],
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
