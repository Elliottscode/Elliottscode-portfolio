import React from "react";
import { Container, CssBaseline } from "@mui/material";
import { BrowserRouter, Router } from "react-router-dom";


// componets 
import AppBar from "../component/AppBar";
import Footer from "../component/Footer";

interface props {
    children: React.ReactNode 
}


export const Layout = (Props:props) => (

    <>
    <CssBaseline />
    <Container maxWidth={false} disableGutters={true}>
    <BrowserRouter>
    <AppBar></AppBar>
    </BrowserRouter>
    <main>{Props.children}</main>
    <Footer></Footer>
    </Container>
    
    </>

);
  
export default Layout;