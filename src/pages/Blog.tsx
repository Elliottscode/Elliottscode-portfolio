import * as React from "react";
import { CssBaseline, Container, Box, Typography, Paper } from "@mui/material";


// Blog card component and data 
import BlogCard from "../component/blogcard/BlogCard";
import blogData from "../component/blogcard/BlogInfo";



export const Blog = () => {

    return (
    <>
        <CssBaseline />
        <Container sx={{}}>
            <Typography variant="h2">
                Topics 
            </Typography>
            <BlogCard title={blogData[0].title} bio={blogData[0].bio} image={blogData[0].image}></BlogCard>

            <BlogCard title={blogData[1].title} bio={blogData[1].bio} image={blogData[1].image}></BlogCard>

            <BlogCard title={blogData[0].title} bio={blogData[0].bio} image={blogData[0].image}></BlogCard>


            



        </Container>
    
    
    </>

)};
  
export default Blog;