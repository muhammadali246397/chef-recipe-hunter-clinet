import React from 'react';
import background from "../assets/background-2.jpg"


import { Button, Carousel, Container } from 'react-bootstrap';

const Slider = () => {
  return (
    <div>
      <Container className='d-flex justify-content-center align-items-center' style={{
        backgroundImage:`url(${background})`,
        height:"80vh",
        backgroundSize:'cover'
      }}>

    <div>
    <h1 style={{fontSize:"4rem"}} className='text-white bolder'>Need a Quality & Taste Improve?</h1>
    
      <h3 className='text-white fs-1 text-center'>You Can Contact Us </h3>
      <br />
      <div className='text-center'>
      <Button className='btn-danger fs-2'>Contact Master Chef</Button>
      </div>
    </div>
      </Container>

    </div>
  );
};

export default Slider;