import { useContext, useEffect, useState } from 'react';
import LoginContext from '../context/LoginContext';
import  Toys from '../components/Toys/Toys';
import { Navigate } from 'react-router-dom';
import { Container, Paper } from '@mui/material';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  const loginContext  = useContext(LoginContext);
  console.log("[Loading Dashboard, signed In?]", loginContext.signedIn);
  if(!loginContext.signedIn) {
    return <Navigate replace to="/login" />;
  }
  else {
  return (
    
        <Toys published={true}/>
  );
  }
}

export default Dashboard;
