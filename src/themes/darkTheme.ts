import { createTheme } from "@mui/material";


const dark = createTheme({

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
            main: '#043b5c'
        },
        secondary: {
            main: '#94d944'
        },
        background: {
            default: "#043b5c",
            paper: "#262626"
        },
        text: {
            primary: "#FFFFFF"
        }
        
    }




});





export default dark;