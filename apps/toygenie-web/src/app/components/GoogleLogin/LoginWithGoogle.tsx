import { GoogleLogin } from 'react-google-login';
import GoogleButton from 'react-google-button';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const clientConfig = { client_id: '640983103969-64m2mir4oucmgg2k6149ao2rhr4kjnfp.apps.googleusercontent.com' }
export function LoginWithGoogle(){

    const handleSuccess = (googleData: any)=> {
        console.log("Login with Google Success: ", googleData);
    }

    const handleFailure = (error: string)=> {
        console.log("Login with Google Failure: ", error);
    }

return (
    <GoogleLogin
        onSuccess={handleSuccess}
        clientId={clientConfig.client_id}
        // preLogin={this.preLoginTracking}
        onFailure={handleFailure}
        render={renderProps => (
            <Button fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                    Log in with Google
            </Button>
            )}
    />
);
}

export default LoginWithGoogle;