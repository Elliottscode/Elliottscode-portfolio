import * as React from "react";
import { Paper, Typography, Box, Container } from "@mui/material";

import homeStyle from "./home.scss";



export const Home = () => (

  <Container >
    <Box className={homeStyle.box} sx={{ width: '100%'}}>
        <Typography variant="h1">
            This is text
        </Typography>

        <Typography sx={{ align:"left"}}>
            This is what i am talking about and such is 
            the way to go on about shit
            the way to go on about shit
            the way to go on about shit
            the way to go on about shit
            the way to go on about shit
        </Typography>
    </Box>

  </Container>

);
  
export default Home;