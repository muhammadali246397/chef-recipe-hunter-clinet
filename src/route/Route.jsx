import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from '../Home/Home';
import Slider from '../Slider/Slider';
import Login from '../Login/Login';
import Resister from '../Resister/Resister';
import Blog from '../Blog/Blog';
import Chef from '../ChefData/Chef';
import ChefCard from '../ChefData/ChefCard';
import Recipes from '../Recipe/Recipes';
import Privateroute from '../Privateroute/Privateroute';

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
      children:[
       {
        path:'/',
        element:<Slider></Slider>
       },
      ]
    },
    {
      path:'/blog',
      element:<Blog></Blog>
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
     path:'/receipe/:id',
     element:<Privateroute><Recipes></Recipes></Privateroute>,
     loader:({params}) => fetch(`https://assignment-ten-server-muhammadali246397.vercel.app/receipes/${params.id}`)
      
    }
  ]);

const Route = () => {
    return (
        <div>
            
        </div>
    );
};

export {router,Route};