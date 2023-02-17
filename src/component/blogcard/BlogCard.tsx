import * as React from "react";
import { Paper, Typography, Box, Container, Grid, CssBaseline, Button } from "@mui/material";
import { Link } from "react-router-dom";

// blog page routes 
import { blogroutes } from "../../routes";

// images 
import gitlogo from './icons/GitHub-logo.png';
import reactlogo from './icons/reactlogo.png';
import tslogo from './icons/tslogo.png';
import sasslogo from './icons/sasslogo.png';
import webpacklogo from './icons/webpack.png';


// styling 
import style from "./BlogCard.scss";



// make image an array 

interface blogData {
    title: string;
    bio: string;
    image: string[];
}

// const image1 = require();
// const image1 = require();
// const image1 = require();
// const image1 = require();

function BlogCard(props:blogData) {  
const image =  props.image[0]
const img1 = require(image)
const img2 = require(props.image[1])
const img3 = require(props.image[2])
const img4 = require(props.image[3])


return (    
<>
    <CssBaseline />
    <Paper sx={{ display: "flex", 
                marginTop: "5%", 
                marginBottom: "5%",
                padding: "30px",
                height: "fit-content"}}>
        <Container disableGutters={true} sx={{width: "200px", height: '100%', bgcolor: 'red'}}>

            <img
                src={img1}
                width="50%"
                height="50%"
                className={style.img}
            />
            <img
                src={img2}
                width="50%"
                height="50%"
                className={style.img}
            />
            <img
                src={img3}
                width="50%"
                height="50%"
                className={style.img}
            />
            <img
                src={img4}
                width="50%"
                height="50%"
                className={style.img}
            />


        </Container>

        <Container>
        <Button component={Link} to={blogroutes[0].path} className={style.link} sx={{color: 'text.primary', padding: 0}}>
        <Typography variant="h4" sx={{}}>
            {props.title}
        </Typography>
        </Button>
        <Typography variant="h6" sx={{paddingTop: '15px'}}>
            {props.bio}
        </Typography>
        </Container>

    </Paper>

</>
)


};

export default BlogCard;