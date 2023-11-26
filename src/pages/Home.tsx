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

          <Typography className={style.title} variant="h1" sx={{}}>
              Im 
          </Typography>
          <Typography className={style.title} variant="h1" sx={{}}>
            Elliott McCully
          </Typography>

        <Grid item sx={{}}>
          <Typography variant="body1" sx={{ width: "50%", marginLeft: "50%", paddingTop: "10vh"}}>
          I am hard working individual who likes to work, learn new skills and grow as a person. I am a fast learner and always try my best to achieve what I set out to do. I believe communication is one of my best skills and feel I work well in teams. Being able to articulate precisely, help motivate and promote efficiency.
          My university studies have equipped me with a broad set of skills in engineering and computer science. I enjoy practical hands-on work where I can use my problem-solving, critical thinking and spatial reasoning to create “outside the box” solutions.


          </Typography>
          <Typography variant="body1" sx={{ width: "50%", marginLeft: "50%", paddingTop: "1vh"}}>
            My university studies have equipped me with a broad set of skills in engineering and computer science. I enjoy practical hands-on work where I can use my problem-solving, critical thinking and spatial reasoning to create “outside the box” solutions.


          </Typography>
        </Grid>

          
      </Grid>

  </Container>
</>
);
  
export default Home;