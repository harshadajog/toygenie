import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Toy } from "@toygenie/graphql-access";
import { useState } from "react";
import { Send } from '@mui/icons-material';
import { SendMessageModal } from "../BasicModal/SendMessageModal";

export default function ToyCard({toy, modalOpen }:{toy: Toy, modalOpen: any}) {

    const handleMessage = () => {
        console.log(" handle messaging");
    }

    return (
        <div>
          <Card className="custom-card" raised>
          <CardActionArea onClick={modalOpen}>
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
          </Card>
          </div>
    );
}