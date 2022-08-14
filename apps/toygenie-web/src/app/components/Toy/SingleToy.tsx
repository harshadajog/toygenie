import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Toy} from '@toygenie/graphql-access';

export default function SingleToy({toy}: { toy: Toy}){
  const imgPath = `../../../assets/unsplash1.jpg`;
  const navigate = useNavigate();
  const handleNavigation = () => navigate("/toy-details", {state:{id: toy.id, 
    title: toy.title, 
    description: toy.description, 
    listPrice: toy.listPrice,
    category: toy.category,
    condition: toy.condition,
    author: toy.author
  }});

  return (
    <Card className='custom-card' raised>
      <CardActionArea>
        <CardMedia
          component='img'
          height='150'
          image={imgPath}
          alt={toy.id}
          onClick={handleNavigation}
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary' noWrap>
            {toy.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button size='small' onClick={handleNavigation}>
          Details
        </Button>
        <Typography variant='subtitle2' color='text.secondary' align='right'>
          {`$${toy.listPrice}`}
        </Typography>
      </CardActions>
    </Card>
  );
};

