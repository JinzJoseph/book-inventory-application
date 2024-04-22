import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const from =location.state?.from?.pathname || "/login"
  console.log(user);
  const loaction = useLocation();
  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }
  if (user) {
    return children;  
  } else {
    return (
      <Navigate to="/login" state={{ from: loaction }} ></Navigate>
    );
  }
};

export default PrivateRoute;
