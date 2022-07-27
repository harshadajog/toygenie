import styles from './layout.module.css';
import React, {PropsWithChildren, useContext} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MUIAppBar from '../AppBar/AppBar';
import LoginContext from '../../context/LoginContext';

export function Layout(props: PropsWithChildren) {
  const loginContext  = useContext(LoginContext);
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ height: '100vh' }}>
         { loginContext.signedIn && <MUIAppBar /> }
        {props.children}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Layout;
