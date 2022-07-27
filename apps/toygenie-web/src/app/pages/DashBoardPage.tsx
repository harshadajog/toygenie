import { useContext, useEffect, useState } from 'react';
import LoginContext from '../context/LoginContext';
// import { AllRecipesContainer } from '@nx-my-org/feature-sets';
//import  MUIAppBar  from '../AppBar/app-bar';
import { Navigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  const loginContext  = useContext(LoginContext);
  console.log(loginContext.signedIn);
  if(!loginContext.signedIn) {
    return <Navigate replace to="/login" />;
  }
  else {
  return (
    <div>
      {/* <MUIAppBar /> */}
      {/* < AllRecipesContainer canDelete={false} /> */}
    </div>
  );
  }
}

export default Dashboard;
