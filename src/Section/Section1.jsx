import React from 'react';
import { Container } from 'react-bootstrap';
import team1 from '../../src/assets/chef1.jpg'
import team2 from '../../src/assets/chef2.jpg'
import team3 from '../../src/assets/chef3.jpg'

const Section1 = () => {
    return (
        <Container>
            <h3 className='text-center my-5'><span className='text-danger text-center fw-bold border-bottom'>Our Best Team </span></h3>
            <div className="row row-cols-md-3 g-2">
                <div >
                    <img className='w-full img-fluid' src={team1} alt="" />
                </div>
                <div className=''>
                    <img className='w-full img-fluid' src={team2} alt="" />
                </div>
                <div>
                <img className='w-full img-fluid' src={team3} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Section1;