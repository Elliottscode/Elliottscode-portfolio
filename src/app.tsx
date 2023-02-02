import * as React from "react";
import ResponsiveAppBar from "./component/AppBar";
import {    BrowserRouter as Router, 
            Route, 
            Routes,
            Link } 
            from "react-router-dom";

import appstyles from "./app.scss";


// Pages 
import About from "./pages/About";
import Home from "./pages/Home";


export const App = () => (

<div>
    
    <Router>
        <ResponsiveAppBar />
        <Link to={'/About.tsx'}>About</Link>
        <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/About.tsx" element={<About />}  />
        </Routes>
    </Router>
    <a className={appstyles.first}>this is stuff</a>



</div>

);

export default App;