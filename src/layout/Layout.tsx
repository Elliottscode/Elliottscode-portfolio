import React from "react";
import { Container, CssBaseline } from "@mui/material";


// componets 
import Footer from "../component/Footer";

interface props {
    children: React.ReactNode 
}


export const Layout = (Props:props) => (

    <>
    <CssBaseline />
    <Container maxWidth={false} disableGutters={true}>
    <main>{Props.children}</main>
    <Footer></Footer>
    </Container>
    
    </>

);
  
export default Layout;