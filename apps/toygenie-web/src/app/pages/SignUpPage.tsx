import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useLocalSignupMutation } from '@toygenie/graphql-access';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import IUser from '../interfaces/IUser';
import LoginContext from '../context/LoginContext';

export default function SignUp() {
  const loginContext = React.useContext(LoginContext);
    // Error variables for inline field validations
    const [fieldErrors, setFieldErrors] = useState({
      email_address: null,
      password: null,
      confirmPassword: null,
      tos: null
    });
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email_address, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const [localSignupMutation, { data: signupData, loading, error: signupError }] = useLocalSignupMutation({
      variables: {
      input: {
        first_name,
        last_name,
        email_address,
        password
      }
      },
     });
  
    // //  // Set input values to user object
    // const gatherUserInfo = (target: HTMLInputElement) => {
    //   const currentUser = { ...userInfo];
    //   userInfo[target.name] = `${target.value}`;
    //   setUserInfo(currentUser);
    // };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(first_name, last_name, email_address + "  " + password);
      
      // Call login graphql
      localSignupMutation ({
        variables: {
          input: {
            first_name,
            last_name,
            email_address,
            password
          }
        }
      })
    };
  
    // useEffect triggered for loginMutation: either data or error.
    useEffect(() => {
      if(signupError){
       console.log(signupError.message);
       setError(signupError.message);
      }
      else if (signupData) {
      console.log(signupData);
      let newUser = signupData.localSignup.user;
      let user: IUser = {
        id: newUser.id,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email_address:  newUser.email_address,
        roles: 'USER',
        auth_token: signupData.localSignup.access_token
      }
      window.localStorage.setItem("USER", JSON.stringify(user));
     loginContext.setSignedIn(true);
       navigate("/dashboard");
        
      }
    }, [signupData, signupError])

    return (
      <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(../../assets/ToyGenie6.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email_address}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />  
                </Grid>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Typography variant="body2" color="red" align="center">
            {error}
          </Typography>
          <Typography variant="body2" align="center">
                <NavLink to="/login">
                    {"Already have an account? Login"}
                </NavLink>
              </Typography>
          </Box>
        </Box>
      </Grid>
      </Grid>
    //  </Grid>
    );
  }