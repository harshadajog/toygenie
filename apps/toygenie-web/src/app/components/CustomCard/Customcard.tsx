import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    CardActionArea,
    Button,
    Modal,
    Box,
  } from "@mui/material";

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  import {Toy} from '@toygenie/graphql-access';
  import { CardDetails } from '../CardDetails/CardDetails';
import { useState } from 'react';

  export default function CustomCard ({toy, ctaBuy, ctaSold}: { toy: Toy, ctaBuy: boolean, ctaSold: boolean}){
    let navigate = useNavigate(); 

    return (
      <div>
      <Card className="custom-card" raised>
        <CardActionArea onClick={(evt) => {
          navigate("/toy-details", {state:{id: toy.id, 
                                    title: toy.title, desc: toy.description, 
                                    price: toy.listPrice,
                                    category: toy.category,
                                    condition: toy.condition
                                  }});                   
        }}>
          <CardMedia
            component="img"
            alt="toy image"
            height="100"
            className="card-image"
            image="../../../assets/unsplash1.jpg"
          />
          <CardContent className="content">
            <Typography 
              className="title"
              noWrap
              gutterBottom
              variant="h5"
              component="h2"
            >
              {toy.title}
            </Typography>
            <Typography
                className="price"
                gutterBottom
                variant="h5"
                component="h2"
              >
                ${toy.listPrice}
              </Typography>
          </CardContent>
        </CardActionArea>
        {ctaBuy &&
          <CardActions className="actions-content" >
            <Button variant="contained" color="primary">
              Contact Seller
            </Button>
          </CardActions>
        }
        {ctaSold &&
          <CardActions className="actions-content" >
            <Button variant="contained" color="primary">
              Mark as Sold
            </Button>
          </CardActions>
        }
      </Card>
      </div>
    );
  };
