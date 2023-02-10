import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { Layout } from "./layout/Layout";
import { ThemeProvider } from "@mui/system";

// Themes 
import darkTheme from "./themes/darkTheme";

// Components 

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<ThemeProvider theme={darkTheme}><Layout><App /></Layout></ThemeProvider>);
