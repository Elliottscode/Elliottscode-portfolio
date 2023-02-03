import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { Layout } from "./layout/Layout";


const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<Layout><App /></Layout>);
