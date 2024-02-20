import { createTheme } from "@mui/material";


const light = createTheme({
    typography: {

    
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
},

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





export default light;