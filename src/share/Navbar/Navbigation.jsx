import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/AuthProvider';

const Navbigation = () => {
  const { users, handlelogOut } = useContext(AuthContext)
  const logOut = () => {
    handlelogOut();
  }
  console.log(users)
  return (
    <div className='mb-4 border-bottom border-danger py-2'>
      <Navbar bg="" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className='text-danger fw-bold'>Chef Master</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <NavLink className='text-decoration-none ms-3 btn outline-dark fw-bolder' to='/'>Home</NavLink>
              <NavLink className='text-decoration-none ms-3 btn outline-dark fw-bolder' to='/about'>About</NavLink>
              <NavLink className='text-decoration-none ms-3 btn outline-dark fw-bolder' to='/blog'>Blog</NavLink>


            </Nav>

            <div className="ms-auto">
              {
                users ? <>
                  <div className='d-inline me-4' >

                    <OverlayTrigger placement='right' overlay={(<Tooltip>{`${users.displayName}`}</Tooltip>)}  triggerType='hover'>
                    <img className='' style={{width:'50px',height:'50px',borderRadius:'50px'}} src={users.photoURL} alt="" />

                    </OverlayTrigger>

                 
                  </div>
                  <Button onClick={logOut} variant="outline-dark">Sing out</Button>
                </> :
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