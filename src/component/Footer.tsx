import * as React from "react";
import { Paper, Typography, Container, ThemeProvider, Box } from "@mui/material";


function Footer()  {


return (
    <Paper 
        sx={{
            width: '100%',
            height: '10vh',
            bottom: 0,
            display: 'flex'}} 
        component="footer" 
        square variant="outlined"
        
    >
        <Container sx={{
            width: '100%',
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            bgcolor: "black"
            }}>

        
                <Typography sx={{}} variant="caption">
                    Created By Elliott :)

                </Typography>
                <Typography sx={{justifyContent:'right'}} variant="caption">
                    {`${new Date().toLocaleDateString()}`}
                </Typography>
        </Container>




    </Paper>

)

    

 };
  
export default Footer;