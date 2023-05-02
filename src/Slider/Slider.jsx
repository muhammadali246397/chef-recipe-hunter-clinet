import React from 'react';
import background from "../assets/background1.webp"
import slider1 from "../assets/slider1.webp"
import slider2 from "../assets/slider2.webp"
import slider3 from "../assets/slider3.jpeg"

import { Carousel, Container } from 'react-bootstrap';

const Slider = () => {
  return (
    <div>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Cooking for Wellness: Nourishing the Body and Soul with Nutritious and Delicious Food</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis optio distinctio eos pariatur vel ullam, provident saepe accusantium est! Veniam, sed quia natus quibusdam ut consequuntur ratione reiciendis ducimus. Eligendi!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
              className="d-block w-100"
              src={slider2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>The Kitchen Chronicles: Adventures in Cooking and Baking</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>The Modernist Chef: Techniques and Innovation in the Kitchen</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus delectus beatae dolores suscipit maiores molestiae sed ipsum, saepe velit nihil cupiditate hic accusamus vitae corporis nobis voluptatibus eligendi quod.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </Container>

    </div>
  );
};

export default Slider;