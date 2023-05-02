import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from '../Home/Home';
import Slider from '../Slider/Slider';
import Login from '../Login/Login';
import Resister from '../Resister/Resister';
import Blog from '../Blog/Blog';

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
      children:[
       {
        path:'/',
        element:<Slider></Slider>
       },
      
       {
        path:'/login',
        element:<Login></Login>,
       },
      
          {
            path:'/resister',
            element:<Resister></Resister>
          },
    {
      path:'/blog',
      element:<Blog></Blog>
    }
       

      ]
    },
    // {
     
      
    // }
  ]);

const Route = () => {
    return (
        <div>
            
        </div>
    );
};

export {router,Route};