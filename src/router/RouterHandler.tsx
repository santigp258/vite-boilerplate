import React from "react";
import { Navigate } from "react-router-dom";
import { AppRoutesType } from "src/interfaces/router.interface";

const RouterHandler: React.FC<AppRoutesType> = ({
  isAuth,
  component: Component,
  isPublic = false,
}) => (isAuth ? <Navigate to={isPublic ? "/" : "/login"} /> : <Component />);

export default RouterHandler;
