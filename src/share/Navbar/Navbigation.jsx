import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/AuthProvider';

const Navbigation = () => {
  const {users,handlelogOut} = useContext(AuthContext)
  const logOut = () => {
    handlelogOut();
  }
  console.log(users)
    return (
        <div className='mb-4 border-bottom'>
             <Navbar  bg="" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='text-danger fw-bold'>Chef Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
            <Link className='text-decoration-none ms-3 btn outline-dark fw-bolder' to='/'>Home</Link>
            <Link className='text-decoration-none ms-3 btn outline-dark fw-bolder' to='/'>About</Link>
            <Link className='text-decoration-none ms-3 btn outline-dark fw-bolder' to='/blog'>Blog</Link>
         

          </Nav>
         
            <div className="ms-auto">
              {
                users ? <>
                <p className='d-inline me-3'>{users.email}</p>
                <Button onClick={logOut} variant="outline-dark">Sing out</Button>
                </>:
                <>
                 <Link to='/login'><Button variant="outline-dark">Login</Button></Link>
                </>
                
              }
           
            </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navbigation;