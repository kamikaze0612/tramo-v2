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
import CountriesList from "./features/countries/CountriesList";
import AddLocationForm from "./features/locations/AddLocationForm";
import { Toaster } from "react-hot-toast";
import LocationDetails from "./features/locations/LocationDetails";
import ProtectedRoute from "./ui/ProtectedRoute";

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
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
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
        {
          path: "locations/:id",
          element: <LocationDetails />,
        },
        {
          path: "countries",
          element: <CountriesList />,
        },
        {
          path: "form",
          element: <AddLocationForm />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "var(--color-bg-white)",
            color: "var(--color-text-black)",
            fontSize: "1.6rem",
            padding: "1.2rem 1.6rem",
          },
          success: {
            duration: 3000,
          },
          error: {
            duration: 2000,
          },
        }}
        position="top-center"
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
