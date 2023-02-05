import React from "react";
import { Container, CssBaseline } from "@mui/material";


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
    <AppBar></AppBar>
    <main>{Props.children}</main>
    <Footer></Footer>
    </Container>
    
    </>

);
  
export default Layout;