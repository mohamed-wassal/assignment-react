import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedResetRoute({ children }) {
  const location = useLocation();
  

  if (!location.state?.email) {
    return <Navigate to="/login" />;
  }

  return children;
}
