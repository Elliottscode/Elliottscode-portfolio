import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Stack from '@mui/material/Stack';

// imports
import { Link} from "react-router-dom";
import {routes as pageRoutes} from "../routes";

// styles 
import style from "./AppBar.scss";

//theme
import darkTheme from "../themes/darkTheme";
import { Grid, ThemeProvider } from '@mui/material';


function ResponsiveAppBar() {


  return (
    <ThemeProvider theme={darkTheme}>
    <Grid container direction="row" width="100%" alignItems="center" display="inline-block">
    <AppBar  sx={{ bgcolor: 'background.paper', boxShadow: "true"}}>
      <Container >
        <Toolbar disableGutters>
          <Grid container item direction="row" spacing="1%" key={"pageMenu"}>
            {pageRoutes.map((route) => (
              <Grid item xs="auto" display={"flex"} key={route.key} >
              <Link
                to={route.path}
                style={{textDecoration: 'none'}}
              >
                <Button
                key={route.title}
                sx={{ my: 3, color: 'text.primary', display: 'block', fontSize: '110%'}}
                >
                {route.title}
              </Button>
              </Link>
              </Grid>
            
            ))}
          <Grid item display="flex" textAlign="center"  key={"logoText"} >
            <Box flexGrow={1} alignContent="center" >
            <Box>
            <Typography
            variant="h6"
            component="a"
            sx={{

              paddingTop: "10%",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'text.primary',
              textDecoration: 'none',
              fontSize: '40%'
            }}
          >
            Elliottscode
          </Typography>
          </Box>
          </Box>
          </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
    </Grid>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;