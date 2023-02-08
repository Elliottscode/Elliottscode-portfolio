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

const light = createTheme({

    palette: {
        primary: {
            main: '#4A00BD'
        },
        secondary: {
            main: '#94d944'
        },
        background: {
            default: "#ffffff"
        },
        text: {
            primary: "#000000"
        }
    }




});

const Mythemes = {
    purple,
    light
}


export default Mythemes;