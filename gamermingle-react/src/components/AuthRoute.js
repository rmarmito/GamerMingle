import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AuthRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export { AuthRoute };
