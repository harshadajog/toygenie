import { useContext, useEffect, useState } from 'react';
import LoginContext from '../context/LoginContext';
import  Toys from '../components/Toy/ToyList';
import { Navigate } from 'react-router-dom';
import { Container, Paper } from '@mui/material';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <>
        <Toys />
        </>
  );
}

export default Dashboard;
