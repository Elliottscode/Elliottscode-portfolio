import * as React from "react";
import { Paper, Typography, Box, Container, Grid, CssBaseline } from "@mui/material";


// images 
import gitlogo from './GitHub-logo.png';
import { flexbox, padding } from "@mui/system";


// styling 
import style from "./BlogCard.scss";

interface blogData {
    title: string;
    bio: string;
    image: string;
}
 

export const BlogCard = (props:blogData) => (


<>
    <CssBaseline />
    <Paper sx={{ display: "flex", 
                marginTop: "5%", 
                marginBottom: "5%",
                padding: "2vw",
                height: "30vh"}}>
        <Container disableGutters={true} sx={{padding: 0, margin: 0, width: '20%', height: '100%', bgcolor: "red"}}>
            <img
                src={gitlogo}
                width="50%"
                height="50%"
                className={style.img}

            />
        </Container>

        <Container>
        <Typography variant="h4" sx={{margin: "2%"}}>
            {props.title}
        </Typography>

        <Typography variant="body1" sx={{margin: "2%"}}>
            {props.bio}
        </Typography>
        </Container>

    </Paper>

</>

);

export default BlogCard;