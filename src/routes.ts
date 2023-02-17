import React, { FC } from "react";

// Main Pages 
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";


// Blog pages 
import ReactTSWebpack from "./pages/blogs/ReactTSWebpack";



interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>,
    bio?: string,
    image?: string

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
        path: 'blog',
        enabled: true,
        component: Blog
    },
    {
        key: 'portfolio-route',
        title: 'Portfolio',
        path: 'portfolio',
        enabled: true,
        component: Blog
    }


]


export const blogroutes: Array<Route> = [
    {
        key: 'blog-1',
        title: 'React Typescript Webpack Boilerplate',
        path: 'reacttswebpack',
        enabled: true,
        component: ReactTSWebpack,
        bio: 'This is a little bio on what this tutorial does i am going to setup a boilier plate with react typesctripty webpack and sass with loaders gort',
        image: 'this is a string'
    },
    {
        key: 'placeholder-1',
        title: 'This is the test topic item',
        path: 'testpage',
        enabled: true,
        component: ReactTSWebpack,
        bio: 'This is a little bio on what this tutorial does i am going to setup a boilier plate with react typesctripty webpack and sass with loaders gort',
        image: 'this is a string'
    }

]