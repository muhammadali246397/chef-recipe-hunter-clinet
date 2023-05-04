import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ChefCard = ({ chefdata }) => {
    const { name, picture, rating, id,experience, numOfRecipes, likes } = chefdata;
    return (
        <div>
            <Row className='mb-4'>
               
                    <Col>
                        <Card >
                            <Card.Img style={{height:'180px'}} variant="top" src={picture} />
                            <Card.Body>
                                <Card.Title>Name : {name}</Card.Title>
                                <Card.Title>Experience : {experience}</Card.Title>

                                <Card.Text>
                                   <p>Number of receipe : {numOfRecipes}</p>
                                   <p>Likes : {likes}</p>
                                </Card.Text>
                                <Link to={`/receipe/${id}`}><Button className='btn-danger'>View recipes</Button></Link>
                            </Card.Body>
                            
                        </Card>
                    </Col>
            </Row>
        </div>
    );
};

export default ChefCard;