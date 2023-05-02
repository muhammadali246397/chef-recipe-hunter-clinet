import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';

const Login = () => {

    const {handleLogin} = useContext(AuthContext);

    const login = (event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        handleLogin(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error.message)
        })
    })

    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                   
                </Form.Group>
                <Button variant="outline-dark" type="submit">
                    Submit
                </Button>
                <p>new to chef master <Link to="/resister">resister</Link> </p>
            
            </Form>
            <Button variant='outline-dark' className='me-3'>Signin with google</Button>
            <Button variant='outline-dark'>Signin with github</Button>
        </div>
    );
};

export default Login;