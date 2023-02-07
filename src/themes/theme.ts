import { Theme, createTheme } from "@mui/material";


const purple = createTheme({

    palette: {
        primary: {
            main: '#4A00BD'
        },
        secondary: {
            main: '#94d944'
        },
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff"
        }
    }




});

const Light = createTheme({

    palette: {
        primary: {
            main: '#4A00BD'
        },
        secondary: {
            main: '#94d944'
        },
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff"
        }
    }




});

export default purple;