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
                padding: "3vh",
                height: "25vh"}}>
        <Container disableGutters={true} sx={{width: "auto", height: '100%', bgcolor: "red"}}>
            <img
                src={gitlogo}
                width="50%"
                height="50%"
                className={style.img}

            />
            <img
                src={gitlogo}
                width="50%"
                height="50%"
                className={style.img}

            />
            <img
                src={gitlogo}
                width="50%"
                height="50%"
                className={style.img}

            />
            <img
                src={gitlogo}
                width="50%"
                height="50%"
                className={style.img}

            />


        </Container>

        <Container>
        <Typography variant="h4" sx={{ fontSize: "4vb"}}>
            {props.title}
        </Typography>

        <Typography variant="body1" sx={{ fontSize: "2.5vb" }}>
            {props.bio}
        </Typography>
        </Container>

    </Paper>

</>

);

export default BlogCard;