import * as React from "react";
import { Paper, Typography, Container, CssBaseline } from "@mui/material";






function Footer()  {


return (
    <>
    <CssBaseline />
    <Paper 
        sx={{
            width: '100%',
            height: '10vh',
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            position: 'relative'}} 
        component="footer" 
        square variant="outlined"
        
    >
        <Container sx={{
            flexGrow: 1,
            minWidth: '100%',
            justifyContent: 'center',
            alignSelf: 'center',
            textAlign: 'center',
            position: 'absolute'
            }}>

        
                <Typography sx={{fontSize: '1.2rem'}} variant="caption">
                    Created By Elliott :)

                </Typography>
               
        </Container>
        <Typography sx={{align: 'right',
                        paddingRight: '2%',
                        right: 0,
                        position: 'absolute',
                        fontSize: '1.2rem'   }} variant="caption">
                {`${new Date().toLocaleDateString()}`}
        </Typography>
        



    </Paper>
    </>

)

    

 };
  
export default Footer;