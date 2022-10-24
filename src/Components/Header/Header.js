import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import webMaster from './../../assets/Images/webMaster.png';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
   return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
         <Container>

            <img
               className="brand-image"
               src={webMaster}
               alt="First slide"
            />

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ms-auto">
                  <Link to="/home">Home</Link>
                  <Link to="/courses">Courses</Link>
                  <Link to="/faq">FAQ</Link>
                  <Link to="/blog">Blog</Link>
                  <Button>Toogle</Button>
                  {
                     // user?.email ? 
                     // <Image />
                     // :
                     <Link>Login</Link>
                  }
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Header;