import * as React from "react";
import ResponsiveAppBar from "../component/AppBar";
import about from "./about.module.scss";

export const About = () => (

    <div>
        <ResponsiveAppBar />
        <h1 className={about.h1}>About</h1>

    </div>

);
  
export default About;



