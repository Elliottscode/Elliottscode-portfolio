import React from "react";


// componets 
import AppBar from "../component/AppBar";

interface props {
    children: React.ReactNode 
}


export const Layout = (Props:props) => (

    <>
    <AppBar></AppBar>
    <main>{Props.children}</main>

    
    </>

);
  
export default Layout;