import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";


   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
       {
        path: '/',
        element: <Home></Home>,
       },
       {
        path: 'about',
        element: <About></About>
       },
       {
        path: 'blog',
        element: <Blog></Blog>
       }
      ]
    },
  ]);