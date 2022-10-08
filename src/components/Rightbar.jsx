import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React from 'react'

export const Rightbar = () => {
  return (
    <Box  p={1} sx={{width: {xs: "none" , sm:"20%"}, display: {xs: "none" , sm:"block"}}}>
    <Box position="fixed" marginRight={2} width={300}>
      <Typography variant="h6" fontWeight={100}>Only Friends</Typography>
      <AvatarGroup max={7} sx={{paddingRight: "80px"}}>
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/13787836/pexels-photo-13787836.jpeg?cs=srgb&dl=pexels-eyup-beyhan-13787836.jpg&fm=jpg" />
      <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/13623493/pexels-photo-13623493.jpeg?cs=srgb&dl=pexels-regina-trissteria-13623493.jpg&fm=jpg" />
      <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/13543276/pexels-photo-13543276.jpeg?cs=srgb&dl=pexels-mathilde-langevin-13543276.jpg&fm=jpg" />
      <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/12021743/pexels-photo-12021743.jpeg?cs=srgb&dl=pexels-yusuf-berat-ilgin-12021743.jpg&fm=jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest photos</Typography>
      <ImageList cols={3} rowHeight={100} gap={5} sx={{paddingRight:"70px"}}> 
      <ImageListItem >
      <img
        src='https://images.pexels.com/photos/13639773/pexels-photo-13639773.jpeg?cs=srgb&dl=pexels-andrea-garibay-13639773.jpg&fm=jpg'
        alt=""
        
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src='https://images.pexels.com/photos/13639773/pexels-photo-13639773.jpeg?cs=srgb&dl=pexels-andrea-garibay-13639773.jpg&fm=jpg'
        alt=""
        
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src='https://images.pexels.com/photos/13639773/pexels-photo-13639773.jpeg?cs=srgb&dl=pexels-andrea-garibay-13639773.jpg&fm=jpg'
        alt=""
        
      />
    </ImageListItem>
   
    
      </ImageList>
      <Typography variant="h6" fontWeight={100} my={2} mb={2}>Latest conversations</Typography>
      <List sx={{ width: '85%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3585013/pexels-photo-3585013.jpeg?cs=srgb&dl=pexels-cottonbro-3585013.jpg&fm=jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
    </Box>
    
  )
}
