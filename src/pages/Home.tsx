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
              Who am i?
          </Typography>

        <Grid item sx={{}}>
          <Typography  sx={{ fontSize: "10re", width: "50%", marginLeft: "50%", paddingTop: "10vh"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi non. Quis hendrerit dolor magna eget est lorem ipsum dolor. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Vel pharetra vel turpis nunc. Pulvinar pellentesque habitant morbi tristique. Sagittis nisl rhoncus mattis rhoncus urna neque. Sagittis nisl rhoncus mattis rhoncus. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Nulla facilisi nullam vehicula ipsum a arcu. Etiam sit amet nisl purus in mollis nunc sed id. Libero enim sed faucibus turpis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Massa sapien faucibus et molestie ac feugiat sed. Fermentum et sollicitudin ac orci phasellus egestas tellus. Commodo elit at imperdiet dui accumsan sit amet. Non arcu risus quis varius quam.

          </Typography>
        </Grid>
        <Typography>
          New added text
        </Typography>

          
      </Grid>

  </Container>
</>
);
  
export default Home;