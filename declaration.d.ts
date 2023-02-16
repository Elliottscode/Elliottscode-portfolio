
// for scss files it auto creates type definitions 
declare module '*.scss';

// type checking for images
declare module "*.png" {
    const value: any;
    export = value;
}