import React from "react";
import { Container, CssBaseline } from "@mui/material";

// Style 
import style from "./layout.scss"; 


// componets 
import Footer from "../component/Footer";

interface props {
    children: React.ReactNode 
}

const date = new Date();
const datestr = "this is a string";

export const Layout = (Props:props) => (

    <>
    <CssBaseline />
    <Container maxWidth={false} disableGutters={true} >
    <main>{Props.children}</main>
    <Footer datetime={datestr}></Footer>
    </Container>
    
    </>

);
  
export default Layout;