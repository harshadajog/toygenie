import { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import IUser from '../interfaces/IUser';
import LoginContext from '../context/LoginContext';
import { useLoginMutation, AuthEnum } from '@toygenie/graphql-access';
import logo from '../../assets/ToyGenie.png';
import { LoginWithGoogle } from '../components/GoogleLogin/LoginWithGoogle';
import { LocalLogin } from '../components/LocalLogin/LocalLogin';
import { Container } from '@mui/material';


export default function SignIn() {

  return (
      // <Grid container component="main" sx={{ height: '100vh' }}>
      //   <CssBaseline />
      //   <Grid
      //     item
      //     xs={false}
      //     sm={4}
      //     md={7}
      //     sx={{
      //       backgroundImage: 'url(../../assets/ToyGenie6.png)',
      //       backgroundRepeat: 'no-repeat',
      //       // backgroundColor: (t) =>
      //       //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      //       backgroundSize: 'cover',
      //       backgroundPosition: 'center',
      //     }}
      //   />
        //  <Container component="main" maxWidth="sm" sx={{ mb: 4}}>
        <Grid container component="main" sx={{ height: '100vh', backgroundImage: 'url(../../assets/background1.jpg)', backgroundSize: 'cover' }} 
        
        >
        <Container component="main" maxWidth="sm">
            <Paper variant="elevation" sx={{ my: { xs: 3, md: 6 }, p: { xs: 1, md: 1 } }}>
        {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square> */}
          <Box
            sx={{
              my: 8,
              mx: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <LocalLogin />
            {/* <Box sx={{ mt: 1 }}>
            <LoginWithGoogle />
            </Box> */}
              <Typography variant="body2" align="center">
                <NavLink to="/signup">
                    {"Don't have an account? Sign Up"}
                </NavLink>
              </Typography>
            </Box>
       {/* </Grid>*/}
        </Paper>
        </Container>
         </Grid>

  );
}