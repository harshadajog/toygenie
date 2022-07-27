// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { useContext, useEffect, useState } from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
//import { CreateRecipe } from '@nx-my-org/ui';
import Layout from './components/Layout/layout';
import  LoginContext  from './context/LoginContext';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/DashBoardPage';
// import UserRecipesPage from './pages/UserRecipesPage';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
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
        {/* <Route path="my-recipes" element={<UserRecipesPage />} />
        <Route path="create-recipe" element={<CreateRecipe />} /> */}
      </Routes>
      </Layout>  
      </div> 
      </LoginContext.Provider>
      </ApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
