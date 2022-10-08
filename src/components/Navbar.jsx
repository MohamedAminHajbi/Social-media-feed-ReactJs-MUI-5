
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "11px",
  width: "40%"
}) );
const Icons = styled(Box)(({theme}) => ({
  display: "none",
  gap:"20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}) )
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
})
)

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky' color='error'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>
          REACT APP
        </Typography>
        <MenuIcon sx={{display: {xs: "block", sm:"none"}}}/>
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon/>
          </Badge>
          <Avatar sx={{width: 30, height: 30, cursor: "pointer"}} src="https://images.pexels.com/photos/10406699/pexels-photo-10406699.jpeg?cs=srgb&dl=pexels-cottonbro-10406699.jpg&fm=jpg" 
          onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar sx={{width: 30, height: 30 , cursor: "pointer"}} src="https://images.pexels.com/photos/10406699/pexels-photo-10406699.jpeg?cs=srgb&dl=pexels-cottonbro-10406699.jpg&fm=jpg"/>
          <Typography variant="span" sx={{cursor: "pointer"}}>MedAmin</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
