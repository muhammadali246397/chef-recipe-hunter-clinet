import React from 'react';
import background from "../assets/background-2.jpg"
import slider1 from "../assets/slider1.webp"
import slider2 from "../assets/slider2.webp"
import slider3 from "../assets/slider3.jpeg"

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