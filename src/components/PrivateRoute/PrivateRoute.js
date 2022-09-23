import { Outlet, Navigate } from "react-router-dom";

export function PrivateRoute({ authenticated }) {
  return authenticated === true ? <Outlet /> : <Navigate to="/" />;
}
