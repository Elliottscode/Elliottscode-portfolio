import * as React from "react";
import { Paper, Typography, Box, Container, Grid, CssBaseline } from "@mui/material";


// code related imports 
import { CopyBlock, dracula } from "react-code-blocks";


const JavaScriptCode = () => {


    return (
    <>
    <CssBaseline />
        <Typography variant="h1">
            JavaScript Code  
        </Typography>


    <Container>

        <Typography variant="body1">
            Create Class 

        </Typography>
        <CopyBlock 
        language={`JS`}
        text={"yarn add react-code-blocks"}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
        />


    </Container>
    
    </>
    );

};
  
export default JavaScriptCode;