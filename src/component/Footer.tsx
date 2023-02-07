import React from "react";
import { Paper, Typography, Container, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

import purple from "../themes/theme";



export const Footer = () => (
    <Paper 
        sx={{
            width: '100%',
            height: '5%',
            bottom: 0,
            position: "fixed",
            backgroundColor: (purple) => purple.palette.background.default }} 
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