import React from 'react';
import { Container } from 'react-bootstrap';
import Navbigation from '../share/Navbar/Navbigation';
import Footer from '../share/Footer/Footer';

const Blog = () => {
    return (
       <Container>
        <Navbigation></Navbigation>
        <div>
            <h3>this is bloging page</h3>
        </div>
        <Footer></Footer>
       </Container>
    );
};

export default Blog;