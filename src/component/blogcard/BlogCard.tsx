import * as React from "react";
import { Paper, Typography, Box, Container, Grid, CssBaseline, Button } from "@mui/material";
import { Link } from "react-router-dom";

// blog page routes 
import { blogroutes } from "../../routes";


// styling 
import style from "./BlogCard.scss";


interface blogData {
    blogNum: number;
    title: string;
    bio: string;
    image: Array<string>;
}


function BlogCard(props:blogData) {  



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
                src={require(`./icons/${props.image[0]}.webp`)}
                width="50%"
                height="50%"
                className={style.img}
            />
            <img
                src={require(`./icons/${props.image[1]}.webp`)}
                width="50%"
                height="50%"
                className={style.img}
            />
            <img
                src={require(`./icons/${props.image[2]}.webp`)}
                width="50%"
                height="50%"
                className={style.img}
            />
            <img
                src={require(`./icons/${props.image[3]}.webp`)}
                width="50%"
                height="50%"
                className={style.img}
            />


        </Container>

        <Container>
        <Button component={Link} to={blogroutes[props.blogNum].path} className={style.link} sx={{color: 'text.primary', padding: 0}}>
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