import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {gql, useLazyQuery } from '@apollo/client';
import { AuthEnum, useLoginMutation } from "@toygenie/graphql-access";
import { useEffect, useState, useContext } from "react";
import IUser from "../../interfaces/IUser";
import LoginContext from '../../context/LoginContext';
import { GET_UNREAD_BY_RECEPIENT } from "../../graphql/graphql";

export function LocalLogin({}) {
    const [email_address, setEmailAddress] = useState('');
    const loginContext = useContext(LoginContext);
    const [loggedInUser, setLoggedInUser] = useState<IUser>();
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const auth_type=AuthEnum.Local;
    const navigate = useNavigate();


    const [loginMutation, { data: loginData, loading, error: loginError }] = useLoginMutation({
        variables: {
          input: {
          email_address,
          password,
          auth_type
          }
        }
      });

      const [getUnread, { data: msgData, loading: msgLoading, error: msgError }] = useLazyQuery(GET_UNREAD_BY_RECEPIENT, {
        variables: {
            recepient: loggedInUser?.id
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
              password,
              auth_type
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
      setLoggedInUser(user);
      window.localStorage.setItem("USER", JSON.stringify(user));
     loginContext.setSignedIn(true);
    }
  }, [loginData, loginError]);

  useEffect(() => {
    if(loggedInUser){
      console.log("type of loggedInUserId", typeof loggedInUser.id);
      getUnread({
        variables: {
            recepient: loggedInUser.id
        }
      })
    }
  }, [loggedInUser])

    useEffect(() => {
      console.log("message useeffect");
      if(msgError)
        console.log("Error fetching unread messages: ", msgError);
      else if(msgData && msgData.unreadMessages){
        console.log("Data fetching unread messages: ", msgData);
        loginContext.setUnread(msgData.unreadMessages.length);
        navigate("/dashboard");
      }  
    }, [msgData, msgError])

    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4}}>
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
      </Box>
    )
}
export default LocalLogin