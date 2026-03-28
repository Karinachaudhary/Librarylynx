import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, userRole, requiredRole }) {
  if (!userRole) return <Navigate to="/login" replace />;
  if (requiredRole && userRole !== requiredRole) return <Navigate to="/login" replace />;
  return children;
}