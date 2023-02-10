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

// imports
import { Link} from "react-router-dom";
import {routes as pageRoutes} from "../routes";

// styles 
import style from "./AppBar.scss";

//theme
import darkTheme from "../themes/darkTheme";
import { ThemeProvider } from '@mui/material';


function ResponsiveAppBar() {


  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="relative" sx={{bgcolor: 'background.paper', boxShadow: "true"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'text.primary',
              textDecoration: 'none',
              fontSize: '150%'
            }}
          >
            ElliottsCode
          </Typography>

          <Box maxWidth="40%" sx={{ marginLeft: '30%', flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between'}}>

            {pageRoutes.map((route) => (
              <Link
                key={route.key}
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
            
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;