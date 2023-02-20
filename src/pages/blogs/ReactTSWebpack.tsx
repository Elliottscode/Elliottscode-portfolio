import * as React from "react";
import { Paper, Typography, Box, Container, Grid, CssBaseline } from "@mui/material";


// code related imports 
import { CopyBlock, dracula } from "react-code-blocks";


const ReactTSWebpack = () => {


    return (
    <>
    <CssBaseline />
        <Typography variant="h1">
            This is react webpack 
        </Typography>

    <Container>

        <Typography variant="body1">
            This is a module to install what you want 

        </Typography>
        <CopyBlock 
        language={`bash`}
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
  
export default ReactTSWebpack;