// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { useContext, useEffect, useState } from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout/layout';
import  LoginContext  from './context/LoginContext';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/DashBoardPage';
import CreateToyPage from './pages/CreateToyPage';
// import UserRecipesPage from './pages/UserRecipesPage';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  //uri: process.env['REACT_APP_GRAPHQL_API_URL'],
  cache: new InMemoryCache(),
});

const initializeSignIn = () => {
  let status = window.localStorage.getItem("SIGNED_IN");

  // provides verification to the front-end the login status
  //let loggedInStatus = (verifyToken() && status === "true") ? "true" : "false";
  // window.localStorage.setItem(LocalStorageTerms.SIGNED_IN, loggedInStatus);

  return (status === "true") ? true: false;
};

export function App() {
  const theme = createTheme();
  const loginContext = useContext(LoginContext);
  const [signedIn, setSignedIn] = useState<boolean>(initializeSignIn);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setSignedIn(loginContext.signedIn);
  }, [loginContext.signedIn])

  return (
    <>
    <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <LoginContext.Provider value={{ signedIn, setSignedIn}}>
      <div className="wrapper">
        <Layout>
      <Routes>
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="my-listings" element={<CreateToyPage />} />
        <Route path="create-listing" element={<CreateToyPage />} />
      </Routes>
      </Layout>  
      <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
      </div> 
      </LoginContext.Provider>
      </ApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
