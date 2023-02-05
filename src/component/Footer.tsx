import React from "react";
import { Paper, Typography, Container, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
    root: {
        flexGrow: 1
    }
    footer: {
        backgroundColor: "#000000"
    }
});



export const Footer = () => (
    <>
    <Paper sx={{
        width: '100%',
        height: '10%',
        bottom: 0,
        position: 'fixed',
        backgroundColor: "#000000"
    }} 
    component="footer" 
    square variant="outlined"
    >


    </Paper>

    
    </>

);
  
export default Footer;