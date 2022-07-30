import { Container, Paper, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

import LoginContext from '../context/LoginContext';
import { CreateToy } from '../components/CreateToy/CreateToy';

export default function CreateToyPage () {
      const loginContext  = useContext(LoginContext);
        console.log(loginContext.signedIn);
        if(!loginContext.signedIn) {
            return <Navigate replace to="/login" />;
        }
        else {
    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                    List an item to sell
                </Typography>
                <CreateToy />
            </Paper>
          </Container>
    );
}
}