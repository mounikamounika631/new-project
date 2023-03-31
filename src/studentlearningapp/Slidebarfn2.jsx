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
import Python1 from "./Python1";
import Java1 from "./Java1";
import Javascript from "./Javascript";
import React1 from "./React1";
import HorizontalLinearStepper from "./Stepper1";




const drawerWidth = 170;

function ResponsiveDrawer(props) {
 
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  
  const [menudata, setMenudata] = React.useState("Python");
//   let ls = JSON.parse(localStorage.getItem("token"));
//   let token = ls ? ls : { fname: "", lname: "" };
//   React.useEffect(() => {
//     if (!ls) {
//       history("/");
//     }
//   }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Container className="sidebar">
        <CardMedia
          sx={{ height: 145 }}
          image="./images/student.png"
          title="green iguana"
          alt="error"
        />

        <Divider />
        <List>
          <ListItem
            disablePadding
            onClick={() => {
              setMenudata("Python");
              handleDrawerToggle();
            }}
          >
          
            
            <ListItemButton sx={{ textShadow: "0px 0px 1px" }}>
              
              <ListItemText primary="Python" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
             setMenudata("Java")
              handleDrawerToggle();
            }}
          >
            <ListItemButton sx={{ textShadow: "0px 0px 1px" }}>
              
              <ListItemText primary="Java" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              setMenudata("Javascript")
              handleDrawerToggle();
            }}
          >
            <ListItemButton sx={{ textShadow: "0px 0px 1px" }}>
              
              <ListItemText primary="Javascript" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              setMenudata("React")
              handleDrawerToggle();
            }}
          >
            <ListItemButton sx={{ textShadow: "0px 0px 1px" }}>
              
              <ListItemText primary="React" />
            </ListItemButton>
          </ListItem>
         
          
        </List>
        <Divider />

        {/* <CardMedia
          sx={{ height: 153 }}
          image="./img/analysis-gdb1f695c1_1920.jpg"
          title="green iguana"
          alt="error"
        /> */}
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
      {/* <CssBaseline sx={{ color: "white" }} />
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
            {/* </Box>
          </Typography>
        </Toolbar>
      </AppBar> */}
      {/* <Box  sx={{marginTop:10,marginLeft:2}}>
      <Stack spacing={1} >
      
      </Stack>
      </Box> */}
      <Box
        // component="nav"
        // sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        // aria-label="mailbox folders"
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
        <Box>
        {/* <HorizontalLinearStepper/> */}
        </Box>
         {menudata === "Python" && <Python1 />}
         {menudata === "Java" && <Java1 />}
        {menudata === "Javascript" && <Javascript />}
        {menudata === "React" && <React1 />}
        
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
