import * as React from "react";
import { Paper, Typography, Box, Container, Grid, CssBaseline } from "@mui/material";

import style from "./home.scss";

// theme 
import dark from "../themes/darkTheme";



export const Home = () => (
<>
  <CssBaseline />
  <Container className={style.container} >

      <Grid container className={style.gridContainer}  sx={{}} >

          <Typography className={style.title} variant="h1" sx={{fontSize: '5rem'}}>
              Hire me?
          </Typography>

        <Grid item sx={{}}>
          <Typography  sx={{ fontSize: "10re"}}>
              This is what i am talking about This is what i am talking about This is what i am talking about This is what i am talking about This is what i am talking aboutThis is what i am talking aboutThis is what i am talking about
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography sx={{ fontSize: "10re"}}>
              This is what i am talking about
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography sx={{ fontSize: "10re"}}>
              This is what i am talking about
          </Typography>
        </Grid>
          
      </Grid>

  </Container>
</>
);
  
export default Home;