import React from 'react';
import { Container, Navbar, Nav ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo6.png';
import './Header.css';


const Header = () => {

    return (
        <>
       <Navbar  bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
    <Container>     
    <Navbar.Brand href="#home">
      <img src={logo} className='logo' alt="" />Newlife Hospital
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link   as={HashLink} to="/home#home" className='header m-2 rounded fst-italic fs-5'>Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services" className='header m-2 rounded fst-italic fw-bold fs-5' >Services </Nav.Link>
      <Nav.Link as={Link} to="/doctors" className='header m-2 rounded fst-italic fw-bold fs-5' >Doctors </Nav.Link>
      <Nav.Link as={Link} to="/speciality" className='header m-2 rounded fst-italic fw-bold fs-5' >Speciality </Nav.Link>
{/*        
   {
     user?.email ?
     <div className= 'd-flex'>
          <Nav.Link as={Link}   to="/dashboard" className='header m-2 rounded fst-italic fw-bold fs-5'>Dashboard</Nav.Link>
      
       <Button onClick={logOut}  className='header-btn m-2 rounded fst-italic fw-bold fs-5 '>LogOut</Button>
       </div>
     :
     <Nav.Link as={Link} to="/login" className='header m-2 rounded fst-italic fw-bold fs-5'>Login</Nav.Link> 
   } */}
     
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </>
    );
};

export default Header;