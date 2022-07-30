import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    CardActionArea,
    Button,
  } from "@mui/material";

  import {Toy} from '@toygenie/graphql-access';
  
  export default function CustomCard ({toy}: { toy: Toy}){
    return (
      <div>
      <Card className="custom-card" raised>
        <CardActionArea>
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
              gutterBottom
              variant="h5"
              component="h2"
            >
              {toy.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="actions-content">
            <>
              <Typography
                className="price"
                gutterBottom
                variant="h5"
                component="h2"
              >
                ${toy.listPrice}
              </Typography>
            </>
          {/* )} */}
        </CardActions>
      </Card>
      </div>
    );
  };
