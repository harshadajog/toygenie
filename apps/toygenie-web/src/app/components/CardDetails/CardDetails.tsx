import { Container, Paper, Typography, Card, CardHeader, CardContent, Divider, CardActions, Button, CardMedia, Box } from '@mui/material';
import {useLocation} from 'react-router-dom';

export function CardDetails(){
    const location = useLocation();
    const toy: any = location.state;  
    console.log(toy.id);
    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Card >
      <CardHeader title = {toy.title} align="center"/>
      <CardMedia
        component="img"
        height="194"
        image="../../../assets/unsplash1.jpg"
        alt="Paella dish"
      />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="h6" color="text.primary" align="justify">{toy.desc}</Typography>
        <Divider variant="middle" />
        <Box display="flex" alignItems="stretch" justifyContent="stretch">
        <Typography variant="body1">Category: {toy.category}</Typography>
        <Typography variant="body1">Condition: {toy.condition}</Typography>
        </Box>
        
        <Typography variant="h5" align="center">
          $ {toy.price}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <Button variant="contained" color="primary">
          Buy
        </Button>
        <Button variant="contained" color="primary" onClick={()=> {
            
        }}>
          Back
        </Button>
      </CardActions>
    </Card>
        </Paper>
      </Container>
    )
}

export default CardDetails;