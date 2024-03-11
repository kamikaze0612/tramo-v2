import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "./Loader";
import { getCurrentUser } from "../services/apiAuthentication";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getCurrentUser()
      .then((user) => {
        if (!user) navigate("/login");
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [navigate]);

  if (isLoading) return <Loader />;

  return children;
};

export default ProtectedRoute;
