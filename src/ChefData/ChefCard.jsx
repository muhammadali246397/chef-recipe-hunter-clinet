import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ChefCard = ({ chefdata }) => {
    const { name, picture, rating, id, numOfRecipes, likes } = chefdata;
    return (
        <div>
            <Row className='mb-4'>
               
                    <Col>
                        <Card >
                            <Card.Img style={{height:'180px'}} variant="top" src={picture} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
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