import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Modal, Paper, TextField, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";
import Button from '@mui/material/Button';
import { Toy, useCreatemessageMutation, User } from "@toygenie/graphql-access";
import { GET_USER_BY_ID} from '../../graphql/graphql';

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

export function SendMessageModal({toy}:{toy: Toy}) {

  const [getUser, { data: userData, loading: userLoading, error: userError }] = useLazyQuery(GET_USER_BY_ID, {
    variables:{
        id: toy.author
    }
  })   

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    let val = window.localStorage.getItem("USER")!;
    const [user, setUser] = useState<User>(JSON.parse(val));
    const [seller, setSeller] = useState<any>({});

    const handleOpen = () => {
      setOpen(true);
      console.log("toy author", toy.author);
      getUser({ variables: { id: toy.author }});
    };
    const handleClose = () => {
      setOpen(false);
      setMessage('');
    };

    const [createmessageMutation, { data: messageData, loading: messageLoading, error: messageError }] = useCreatemessageMutation();

    const handleSend = () => {
      console.log(message); 
      if(message){
        console.log("seller id:", seller);
        createmessageMutation({
          variables: {
            input: {
              parent_message_id: 0,
              subject: `Interested in ${toy.title}` ,
              messageBody: message,
              created_date: "2022-08-09T11:34:21Z",
              creator_id: user.id,
              recipient_id: seller.id,
              is_read: false
            }
          }
        });
      }
      setOpen(false);
    };

    useEffect(() => {
      if(userError)
        console.log("Fetch User Error", userError);
      if(userData && userData.userById) {
        console.log("Fetch User Data", userData.userById);
        setSeller({id: toy.author, ...userData.userById});
      }
    }, [userData, userError])

    useEffect(() => {
      if(messageError){
        console.log("CREATE MESSAGE MUTATION", messageError);
        toast.error('Message not sent!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      else if(messageData && messageData.createMessage) {
      console.log("CREATE MESSAGE MUTATION", messageData);
      toast.success('Message Sent!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      }
    }, [messageData, messageError])
  
    return (
      <Fragment>
        <Button onClick={handleOpen}>Message Seller</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="child-modal-title">Message {seller.first_name}</h2>
            <Box p={0.5} gap={2} borderRadius={16}>
              <Paper elevation={2}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start" style={{ paddingTop: 0, paddingBottom: 0, margin: 1.0 }}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="../../../assets/unsplash1.jpg" style={{borderRadius: '0'}}/>
                  </ListItemAvatar>
                <ListItemText style={{ lineHeight: 1, margin: 0 }}
                  primary={toy.title}
                  secondary={toy.listPrice}
                  />   
                </ListItem>
                </List>
              </Paper>
            </Box>
           <Box sx={{mt: 2}}>
            <TextField
            fullWidth
            required
            id="message-input"
            name="message"
            label="Message"
            type="text"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end'  }}>
            <Button variant="contained" onClick={handleSend}>Send</Button>
            <Button onClick={handleClose}>Cancel</Button>
            </Box>
          </Box>
        </Modal>
      </Fragment>
    );
  }