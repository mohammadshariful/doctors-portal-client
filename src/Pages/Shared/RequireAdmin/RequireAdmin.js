import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../Loading/Loading";
const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [admin, adminLoading] = useAdmin(user);
  if (loading || adminLoading) {
    return <Loading />;
  }

  if (!user || !admin) {
    signOut(auth);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAdmin;
