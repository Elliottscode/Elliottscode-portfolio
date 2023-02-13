import React from "react";
import { Paper, Typography, Container, ThemeProvider } from "@mui/material";



type AppProps = {
    datetime: string;
}

function getDate() {
    var str = "";
    var date = new Date;
    const dateStr = date.toDateString;
    var str = str + dateStr;
    return str;

}

function Footer()  {
    var dateText = "";
    var dateText = getDate();

return (
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
                   {dateText}
                </Typography>



    </Paper>

)

    

 };
  
export default Footer;