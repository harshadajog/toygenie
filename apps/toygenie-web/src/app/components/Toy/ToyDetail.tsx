import { Box, Button, Card, CardMedia, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';
import { Toy } from "@toygenie/graphql-access";
import { SendMessageModal } from "../BasicModal/SendMessageModal";

export default function ToyDetail(){
    const imgPath = `../../../assets/unsplash1.jpg`;
    const navigate = useNavigate();
    const handleReturn = () => navigate(-1);
    const location = useLocation();
    const toy: any = location.state;  
    console.log(toy.listPrice);

    return (
        <>
          <Grid
            container
            mt={5}
            className='animate__animated animate__fadeIn'
            spacing={3}
            display='flex'
            justifyContent='center'
          >
            <Grid
              item
              sm={6}
              md={4}
              className='animate__animated animate__fadeInLeft'
            >
              <Card>
                <CardMedia component='img' image={imgPath} alt={toy.id} />
              </Card>
              <Box
                display='flex'
                justifyContent='space-between'
                mt={1}
                alignContent='center'
              >
                <Button startIcon={<ArrowBackIcon />} onClick={handleReturn}>
                Back</Button>
              </Box>
            </Grid>
    
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant='h5' textAlign='left' gutterBottom>
                <strong>{toy.title}</strong>
              </Typography>

              <Typography variant='h5' textAlign='left' gutterBottom>
                ${toy.listPrice}
              </Typography>

              <Box pt={3}>
              <Typography sx={{paddingTop:'0.5'}} variant='body1' component='h3'>
                {toy.description}
                </Typography>
                </Box>

               <Box pt={3}>
            <Typography variant='body1' component='h3'>
                <strong>Category: </strong>{toy.category}
            </Typography>  

            <Typography variant='body1' component='p'>
            <strong>Condition: </strong>{toy.condition}
            </Typography>
            {/* <Button onClick={handleOpen}>Contact Seller</Button> */}
            <SendMessageModal toy={toy}  />
            </Box> 
            </Grid>
          </Grid>
        </>
      );
}