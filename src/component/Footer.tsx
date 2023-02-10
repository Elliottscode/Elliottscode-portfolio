import React from "react";
import { Paper, Typography, Container, ThemeProvider } from "@mui/material";
import { render } from "node-sass";



type AppProps = {
    datetime: string;
}


export const Footer = ({ datetime }: AppProps) => (


    <Paper 
        sx={{
            width: '100%',
            height: '10vh',
            bottom: 0,
            display: 'flex',
            justifyContent: 'center', 
            verticalAlign: 'center', 
            alignItems: 'center'}} 
        component="footer" 
        square variant="outlined"
        
    >
  
                <Typography variant="caption">
                    Created By Elliott :)

                </Typography>

                <Typography variant="caption">
                    {datetime}
                </Typography>



    </Paper>

    

);
  
export default Footer;