import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Breadcrumbs, CardMedia, Container,IconButton, Link, Stack } from "@mui/material";
import Datatypes from "../studentlearningapp/Datatypes";
import ConditionalStatemnets from "../studentlearningapp/ConditionalStatemnets";
import Variables from "../studentlearningapp/Variables";
import Loops from "../studentlearningapp/Loops";




const drawerWidth = 252;

function ResponsiveDrawer(props) {
 
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  
  const [menudata, setMenudata] = React.useState("Data Types");


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Container className="sidebar">
        <CardMedia
          sx={{ height: 145 }}
          image="./images/student1.png"
          title="green iguana"
          alt="error"
        />

        <Divider />
        <List>
          <ListItem
            disablePadding
            onClick={() => {
              setMenudata("Data Types");
              handleDrawerToggle();
            }}
          >
            <CardMedia
          sx={{ height: 45 }}
          image="./images/logo1.png"
          title="green iguana"
          alt="error"
        />
            
            <ListItemButton sx={{ textShadow: "0px 0px 1px" }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
             setMenudata("conditional statements")
              handleDrawerToggle();
            }}
          >
            <ListItemButton sx={{ textShadow: "0px 0px 1px" }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="conditional statements" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              setMenudata("Variables")
              handleDrawerToggle();
            }}
          >
            <ListItemButton sx={{ textShadow: "0px 0px 1px" }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Variables" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              setMenudata("Loops")
              handleDrawerToggle();
            }}
          >
            <ListItemButton sx={{ textShadow: "0px 0px 1px" }}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Loops" />
            </ListItemButton>
          </ListItem>
         
          
        </List>
        <Divider />

        <CardMedia
          sx={{ height: 153 }}
          image=""
          title="green iguana"
          alt="error"
        />
        {/* <strong>
          <p>Welcome to clinic</p>
        </strong> */}
      </Container>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

    // function handleClick(event) {
    //     event.preventDefault();
    //     console.info('You clicked a breadcrumb.');
    //   }
    // const breadcrumbs = [
    //     <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
    //       MUI
    //     </Link>,
    //     <Link
    //       underline="hover"
    //       key="2"
    //       color="inherit"
    //       href="/material-ui/getting-started/installation/"
    //       onClick={handleClick}
    //     >
    //       Core
    //     </Link>,
    //     // <Typography key="3" color="text.primary">
    //     //   Breadcrumb
    //     // </Typography>,
    //   ];

  return (

    <Box sx={{ display: "flex" }}>
      <CssBaseline sx={{ color: "white" }} />
      <AppBar
      className="appbar"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            
          </IconButton>
          <Typography variant="h6" noWrap component="div" className="m">
            <Box
              sx={{ display: "flex", alignItems: "flex-end", color: "black" }}
            >
              
              {/* {token.fname + " " + token.lname} */}
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box  sx={{marginTop:10,marginLeft:2}}>
      <Stack spacing={1} >
      
      </Stack>
      </Box>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
         {menudata === "Data Types" && <Datatypes />}
         {menudata === "conditional statements" && <ConditionalStatemnets />}
        {menudata === "Variables" && <Variables />}
        {menudata === "Loops" && <Loops />}
        
      </Box>
    </Box>
    
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
