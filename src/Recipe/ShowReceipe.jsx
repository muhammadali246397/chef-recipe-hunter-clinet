import React, { useState } from 'react';
import { Button, Card, Col, Container, Row, Toast } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar, } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShowReceipe = ({ receipe }) => {
    const [addfevorite, setAddfevorite] = useState(true)

    const addReceipe = () => {
        setAddfevorite(false)
        toast('succesfully add')

    }
    const { id, photo, recipeName, ingredients, cookingMethod, rating } = receipe
    return (
        <Container>
           
            <Row>
                <Col>
                    <Card>
                        <Card.Img style={{height:"250px"}} variant="top" src={photo} />
                        <Card.Body>
                            <Card.Title className='text-danger'>{recipeName}</Card.Title>

                            <div className='row row-cols-2'>
                                <div>
                                    <h5>Ingredients :</h5>
                                    <ul>
                                        {ingredients.map((ing, index) => <li key={index}><span>{ing}</span></li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h5>Cooking method</h5>
                                    <p>{cookingMethod}</p>
                                </div>
                            </div>


                            <div className='d-flex justify-content-between align-items-center'>
                                <Button  disabled={!addfevorite} onClick={addReceipe} className='btn-danger'>Favorite</Button>
                                <div >
                                    <div>
                                        <Rating
                                            placeholderRating={rating}
                                            readonly
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                            fullSymbol={<FaStar></FaStar>}
                                        /> <span className='ms-2'>{rating}</span>
                                    </div>
                                    {/* <div>
                                    <p className='d-inline'>{rating}</p> 
                                    </div> */}


                                </div>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
            <ToastContainer></ToastContainer>
        </Container>
    );
};

export default ShowReceipe;