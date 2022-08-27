// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { useContext, useEffect, useState } from 'react';
import fetch from 'cross-fetch';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, ApolloProvider, gql, useLazyQuery } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout/layout';
import  LoginContext  from './context/LoginContext';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/DashBoardPage';
import CreateToyPage from './pages/CreateToyPage';
import ToysByAuthor from './pages/ToysByAuthor';
import CardDetails from './components/CardDetails/CardDetails';
import ProtectedRoute, { ProtectedRouteProps } from './components/ProtectedRoute/ProtectedRoute';

import ToyDetail from './components/Toy/ToyDetail';
import { GET_UNREAD_BY_RECEPIENT } from './graphql/graphql';
import Messenger from './components/Messaging/Messenger';

import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';

import { setContext } from '@apollo/client/link/context';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/graphql', fetch }),
  //uri: 'http://localhost:3000/graphql',
  //uri: process.env['REACT_APP_GRAPHQL_API_URL'],
  cache: new InMemoryCache()
});

// const client = new ApolloClient({
//   link: ApolloLink.from([
//     onError(({ graphQLErrors, networkError }) => {
//       if (graphQLErrors) {
//         graphQLErrors.forEach(({ message, locations, path }) =>
//           console.log(
//             `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//           )
//         );
//       }
//       if (networkError) {
//         // localStorage.removeItem('token');
//         console.error(`[Network error]:`, networkError);
//       }
//     }),
//     new RetryLink(),
//     new BatchHttpLink({
//       uri: 'http://localhost:3000/graphql',
//       batchMax: 2,
//       batchInterval: 20,
//     }),
//   ]),
//   cache: new InMemoryCache(),
//   connectToDevTools: false,
// });



const initializeSignIn = () => {
 let jsonValue =  window.localStorage.getItem("USER");
 if (jsonValue != null) return JSON.parse(jsonValue);

};

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }});
  const lightTheme = createTheme({
    palette: {
      mode: 'light'
    }});

export function App() {
 // const theme = createTheme();
  const loginContext = useContext(LoginContext);
  const [signedIn, setSignedIn] = useState<boolean>(initializeSignIn);
  const [user, setUser] = useState(null);
  const [unread, setUnread] = useState(0);
  const [loggedUserId, setLoggedUserId] = useState(-1);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("USER");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      setSignedIn(true);
      setLoggedUserId(foundUser.id);
    }
  }, []);

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: !!loginContext.signedIn,
    authenticationPath: "/login",
  };

  return (
    <>
    <ThemeProvider theme={lightTheme}>
    <ApolloProvider client={client}>
      <LoginContext.Provider value={{ signedIn, setSignedIn, unread, setUnread, loggedUserId, setLoggedUserId }}>
      <div className="app">
        <Layout>
      <Routes>
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="/" element={<Dashboard />} />
        {/* <Route
          path="/"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<Dashboard />}
            />
          }
        /> */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<Dashboard />}
            />
          }
        />
        <Route
          path="my-listings"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<ToysByAuthor />}
            />
          }
        />
        <Route
          path="create-listing"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<CreateToyPage />}
            />
          }
        />
        <Route
          path="toy-details"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<ToyDetail />}
            />
          }
        />
        <Route
          path="inbox"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<Messenger />}
            />
          }
        />
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
