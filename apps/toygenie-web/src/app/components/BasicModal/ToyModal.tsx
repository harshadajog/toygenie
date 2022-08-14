import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Toy } from '@toygenie/graphql-access';
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material';
import { SendMessageModal } from './SendMessageModal';
import ToyCard from '../ToyCard/ToyCard';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal({toy}:{toy: Toy}) {
  const [open, setOpen] = React.useState(false);
  const modalOpen = () => {
    setOpen(true);
  };
  const modalClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ToyCard toy={toy} modalOpen={modalOpen}/>
      <Modal
        open={open}
        onClose={modalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
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
        <Typography variant="h6" color="text.primary" align="justify">{toy.description}</Typography>
        <Divider variant="middle" />
        <Box display="flex" alignItems="stretch" justifyContent="stretch">
        <Typography variant="body1">Category: {toy.category}</Typography>
        <Typography variant="body1">Condition: {toy.condition}</Typography>
        </Box>
        
        <Typography variant="h5" align="center">
          $ {toy.listPrice}
        </Typography>
      </CardContent>
      </Card>
        </Box>
      </Modal>
       {/* <SendMessageModal msgReceiver={toy.author} toyId={toy.id} toyTitle={toy.title} toyPrice={toy.listPrice}></MessageModal> */}

    </div>
  );
}