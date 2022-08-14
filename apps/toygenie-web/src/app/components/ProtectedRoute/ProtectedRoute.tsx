import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import  LoginContext  from '../../context/LoginContext';
export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
  };
  
  export default function ProtectedRoute({
    isAuthenticated,
    authenticationPath,
    outlet,
  }: ProtectedRouteProps) {
    const loginContext = useContext(LoginContext);
    console.log("Signed In: ",loginContext.signedIn);
    if (loginContext.signedIn) {
      return outlet;
    } else {
      return <Navigate to={{ pathname: authenticationPath }} />;
    }
  }