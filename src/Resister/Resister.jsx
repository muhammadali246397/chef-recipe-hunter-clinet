import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';
import Navbigation from '../share/Navbar/Navbigation';
import Footer from '../share/Footer/Footer';

const Resister = () => {
const [error,setError] =useState(null)
    const { createUser, useerupdateProfile } = useContext(AuthContext);

    const signin = (event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        setError(null)
        console.log(name, email, photoUrl, password)
        createUser(email, password)
            .then(result => {
                const newUsers = result.user
                console.log(newUsers)
                form.reset()

                alert('resistation complete')
                useerupdateProfile(newUsers,name,photoUrl)
                .then(()=> console.log('photo and name update'))
                .catch(error => console.log(error.message))
            })
            .catch(error => {
                const message = error.message
                setError(message)
            })
            
            
    })

    return (
        <Container>
            <Navbigation></Navbigation>
            <div className='bg-light'>
            <div className='w-md-50 mx-auto'>
               
                    <Form onSubmit={signin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control required type="text" name='name' placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control required type="text" name='photoUrl' placeholder="Enter Image url" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" name='email' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <p>allready have an account ? <Link to='/login'>login</Link> </p>
                        <p className='text-danger'>{error}</p>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </Container>
    );
};

export default Resister;