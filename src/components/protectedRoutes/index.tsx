import * as React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { auth } from "../../assets/firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spinner } from "../../components/ui/spinner";

interface IProtectedRoutesProps {}

const ProtectedRoutes: React.FunctionComponent<IProtectedRoutesProps> = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="medium" />
      </div>
    );
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
