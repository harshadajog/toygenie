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
import { useLoginMutation } from '@toygenie/graphql-access';
import logo from '../../assets/ToyGenie.png';


export default function SignIn() {
  const loginContext = useContext(LoginContext);
  const [email_address, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [loginMutation, { data: loginData, loading, error: loginError }] = useLoginMutation({
    variables: {
      input: {
      email_address,
      password
      }
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email_address + "  " + password);
    
    // Call login graphql
    loginMutation ({
      variables: {
        input: {
          email_address,
          password
        }
      }
    })

  };

  // useEffect triggered for loginMutation: either data or error.
  useEffect(() => {
    if(loginError){
     console.log("Inside FE Login: ", loginError.message);
     setError(loginError.message);
    }
    else if (loginData) {
      let user: IUser = {
        id: loginData.login.user.id,
        first_name: loginData.login.user.first_name,
        last_name: loginData.login.user.last_name,
        email_address:  loginData.login.user.email_address,
        roles: 'USER',
        auth_token: loginData.login.access_token
      }
      window.localStorage.setItem("USER", JSON.stringify(user));
     loginContext.setSignedIn(true);
     navigate("/dashboard");
    }
  }, [loginData, loginError])

  return (
    // https://source.unsplash.com/gDiRwIYAMA8/500x400
  //  <ThemeProvider theme={theme}>
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
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email_address}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Typography variant="body2" color="red" align="center">
              {error}
            </Typography>
              <Typography variant="body2" align="center">
                <NavLink to="/signup">
                    {"Don't have an account? Sign Up"}
                </NavLink>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

  );
}