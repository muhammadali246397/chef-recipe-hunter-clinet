import React from 'react';
import { Container } from 'react-bootstrap';
import cat1 from '../../src/assets/cat1.jpg'
import cat2 from '../../src/assets/cat2.jpg'
import cat3 from '../../src/assets/cat3.jpg'
import cat4 from '../../src/assets/cat4.jpg'

const Section2 = () => {
    return (
        <Container>
            <div className="my-5">
              
                <h1 className='text-center fw-bold'><span className='text-danger'>Recipe Categories</span></h1>
                <p className='text-center'><span className=' border-bottom py-2 border-danger'>chose a categories</span></p>
            </div>
            <div className="row row-cols-md-4 g-2">
                <div className='text-center'>
                    <img className='img-fluid rounded-circle mb-2' src={cat1} alt="" />
                    <h4>Appetizers</h4>
                </div>
                <div className='text-center'>
                    <img className='img-fluid rounded-circle mb-2' src={cat2} alt="" />
                    <h4>Beef</h4>
                </div>
                <div className='text-center'>
                    <img className='img-fluid rounded-circle mb-2' src={cat3} alt="" />
                    <h4>Chicken</h4>
                </div>
                <div className='text-center'>
                    <img className='img-fluid rounded-circle mb-2' src={cat4} alt="" />
                    <h4>Vegetarian</h4>
                </div>
            </div>
        </Container>
    );
};

export default Section2;