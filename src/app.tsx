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

type AppProps = { num: number };

export const App = () => (

<div>
    
    <Router>
        <ResponsiveAppBar />
        <Routes>
        <Route path="/">Home</Route>
        <Route path="/About" element={<About />}  />
        </Routes>
    </Router>
    <a className={appstyles.first}>this is stuff</a>



</div>

);

export default App;