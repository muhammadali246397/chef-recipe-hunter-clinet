import React from 'react';
import { Container } from 'react-bootstrap';
import Navbigation from '../share/Navbar/Navbigation';
import Footer from '../share/Footer/Footer';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowReceipe from './ShowReceipe';
import background from '../../src/assets/background-2.jpg'
import chef1 from '../assets/chef4.jpg'

const Recipes = () => {
    // const {id} = useParams();
    const receipeData = useLoaderData();
    return (
        <Container>
            <Navbigation></Navbigation>
            <div className='d-flex justify-content-between align-items-center my-4 p-4 ' style={{
                background: 'whiteSmoke',
                backgroundSize: 'cover',
                }}>
                <div>
                    <h1>Hi,This is Emeril Lagasse</h1>
                    <p>Emeril John Lagassé III is an American celebrity chef, restaurateur, television personality, cookbook author, and National Best Recipe award winner for his Turkey and Hot Sausage Chili recipe in 2003</p>

                </div>
                <div className=''>
                    <img className='w-100 img-fluid' src={chef1} alt="" />
                </div>

            </div>
            <h3 className='text-center my-5 text-danger'>Fine and Delecious Foods</h3>
            <div className='row row-cols-md-2'>
                {
                    receipeData.map(showreceipe => <ShowReceipe
                        key={showreceipe.id}
                        receipe={showreceipe}
                    ></ShowReceipe>)
                }
            </div>
            <Footer></Footer>
        </Container>
    );
};

export default Recipes;