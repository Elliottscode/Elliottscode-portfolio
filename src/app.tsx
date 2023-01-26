import * as React from "react";
import ResponsiveAppBar from "./component/AppBar";
import {    BrowserRouter as Router, 
            Route, 
            Routes,
            Link } 
            from "react-router-dom";

type AppProps = { num: number };

export const App = () => (

<div>
    <ResponsiveAppBar />
    <Router>
        <Routes>
        <Route path="/">Home</Route>
        <Route path="./pages/About.tsx"></Route>
        </Routes>
    </Router>
    <a>this is sutff</a>



</div>

);

export default App;