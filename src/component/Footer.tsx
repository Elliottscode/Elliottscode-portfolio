import React from "react";
import { Paper, Typography, Container, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles(() => {
    root: {
        flexGrow: 1
    }
    footer: {
        backgroundColor: "#000000"
    }
});



export const Footer = () => (
    <Paper 
        sx={{
            width: '100%',
            height: '5%',
            bottom: 0,
            position: "fixed",
            backgroundColor: "#D3D3D3"}} 
        component="footer" 
        square variant="outlined"
    >
        <Container maxWidth="lg">
            <Box
                sx={{
                    flexGrow: 1,
                    justifyContent: "center",
                    display: "flex",
                    my:1,
                    alignItems: "center",
                    direction: "column"

                }}
            >
                <Typography variant="caption">
                    Created By Elliott :)

                </Typography>



            </Box>

        </Container>
    </Paper>

    
    

);
  
export default Footer;