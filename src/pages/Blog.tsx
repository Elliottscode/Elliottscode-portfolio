import * as React from "react";
import { CssBaseline, Container, Box, Typography, Paper } from "@mui/material";


// Blog card component
import BlogCard from "../component/blogcard/BlogCard";

// Blog data and routes 
import { blogroutes } from "../routes";


export const Blog = () => {

    return (
    <>
        <CssBaseline />
        <Container sx={{}}>
            <Typography variant="h2" sx={{marginTop: "2vh"}}>
                Posts
            </Typography>
            <BlogCard blogNum={0} title={blogroutes[0].title} bio={blogroutes[0].bio} image={blogroutes[0].image}></BlogCard>

            <BlogCard blogNum={1} title={blogroutes[1].title} bio={blogroutes[1].bio} image={blogroutes[1].image}></BlogCard>



        </Container>
    
    
    </>

)};
  
export default Blog;