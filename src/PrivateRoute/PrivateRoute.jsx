import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../Hook/authHook";
import Loading from "../sharedComponent/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        // Redirect to login if not authenticated
        navigate("/login", { state: { from: location }, replace: true });
      }
      setChecked(true); // Auth check done
    }
  }, [user, loading, navigate, location]);

  if (loading || !checked) {
    return <Loading />; // Show loader while checking auth
  }

  return children;
};

export default PrivateRoute;
