import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';
import Navbigation from '../share/Navbar/Navbigation';
import Footer from '../share/Footer/Footer';

const Login = () => {


    const { handleLogin,googleSignin,gitSignIn } = useContext(AuthContext);

    const login = (event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        handleLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error.message)
            })
    })

    const handleGoogleSignin = () => {
        googleSignin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.log(error.message))
    }

    const handleGitSingIn = () => {
        gitSignIn()
        .then(result => console.log(result.user))
        .catch(error => console.log(error.message))
       
    } 

    return (
        <Container>
            <Navbigation></Navbigation>
                <div className='bg-light'>
                <Container className='w-50 mx-auto'>
            
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
            <Button onClick={handleGoogleSignin} variant='outline-dark' className='me-3'>Signin with google</Button>
            <Button onClick={handleGitSingIn} variant='outline-dark'>Signin with github</Button>
           
        </Container>
                </div>
            <Footer></Footer>
        </Container>
    );

};
<Footer></Footer>
export default Login;