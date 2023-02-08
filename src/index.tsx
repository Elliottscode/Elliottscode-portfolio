import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { Layout } from "./layout/Layout";
import { ThemeProvider } from "@mui/system";

// Themes 
import Mythemes from "./themes/theme";

// Components 

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<ThemeProvider theme={Mythemes.light}><Layout><App /></Layout></ThemeProvider>);
