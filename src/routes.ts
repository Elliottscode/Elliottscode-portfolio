import React, { FC } from "react";

// Main Pages 
import Home from "./pages/Home";
import About from "./pages/about/About";
import Blog from "./pages/Blog";


// Blog pages 
import ReactTSWebpack from "./pages/blogs/ReactTSWebpack";
import JavaScriptCode from "./pages/blogs/CodeExamples/JavaScriptCode";



interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>

}

interface blog {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>,
    bio: string,
    image: Array<string>
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


export const blogroutes: Array<blog> = [
    {
        key: 'blog-1',
        title: 'React Typescript Webpack Boilerplate',
        path: 'reacttswebpack',
        enabled: true,
        component: ReactTSWebpack,
        bio: 'This is a little bio on what this tutorial does i am going to setup a boilier plate with react typesctripty webpack and sass with loaders gort',
        image: ['reactlogo', 'tslogo', 'sasslogo', 'webpack']
    },
    {
        key: 'blog-2',
        title: 'JS Code Examples',
        path: 'CodeExamples/javascript',
        enabled: true,
        component: JavaScriptCode,
        bio: 'This is a little bio on what this tutorial does i am going to setup a boilier plate with react typesctripty webpack and sass with loaders gort',
        image: ['github', 'github', 'github', 'github']
    }

]