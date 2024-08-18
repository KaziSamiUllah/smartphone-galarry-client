import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; // or any loading spinner
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname || '/'} to="/login"></Navigate>;

};

export default ProtectedRoute;