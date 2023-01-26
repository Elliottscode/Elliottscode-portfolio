import * as React from "react";
import ResponsiveAppBar from "./component/AppBar";
import {    BrowserRouter as Router, 
            Route,
            Link } 
            from "react-router-dom";

type AppProps = { num: number };

export const App = () => (

<div>
    <ResponsiveAppBar />
    <Router>
        <Link to="/">Home</Link>
        <Link to="./pages/About.tsx">About</Link>

    </Router>



</div>

);

export default App;