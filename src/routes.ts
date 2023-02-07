import React, { FC } from "react";

// Pages 
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";


interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>

}


export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: 'about',
        enabled: true,
        component: About
    },
    {
        key: 'blog-route',
        title: 'Blog',
        path: '/blog',
        enabled: true,
        component: Blog
    },
    {
        key: 'portfolio-route',
        title: 'Portfolio',
        path: '/portfolio',
        enabled: true,
        component: Blog
    }


]