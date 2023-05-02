import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer/Footer';
import Navbigation from '../share/Navbar/Navbigation';
import Chef from '../ChefData/Chef';

const Home = () => {
    return (
        
         <Container>
          <Navbigation></Navbigation>
          <Outlet></Outlet>
          <Chef></Chef>
          <Footer></Footer>  
         </Container>
       
    );
};

export default Home;