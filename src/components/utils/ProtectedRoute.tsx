import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  registered: { email: string };
  redirectPath?: string;
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  registered,
  redirectPath = '/signup',
  children
}) => {
  
  if (!registered.email) {
    return <Navigate to={redirectPath} replace />;
  }
  return <>{children}</>;
}

export default ProtectedRoute;
