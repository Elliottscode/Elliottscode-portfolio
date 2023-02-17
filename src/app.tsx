import React from "react";

import {    BrowserRouter as Router, 
            Route, 
            Routes
        } from "react-router-dom";

import appstyles from "./app.scss";
import ResponsiveAppBar from "./component/AppBar";


// Pages 
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";


// Blog Pages
import ReactTSWebpack from "./pages/blogs/ReactTSWebpack"; 


export const App = () => (

<div>
    
    <Router>
        <ResponsiveAppBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}  />
        <Route path="blog" element={<Blog />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog/reacttswebpack" element={<ReactTSWebpack />} />
        </Routes>
    </Router>



</div>

);

export default App;